    function show_loader() {
        $("#gs_front_loader").show();
    }
    
    function hide_loader() {
    $("#gs_front_loader").hide();
    }
    

    function validateFileType(){
      let   extFile= getFileExtension();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            return true;
        }else{
            return false;
            //alert("Only jpg/jpeg and png files are allowed!");
        }   
    }

    function getFileExtension(){
        var fileName = document.getElementById("imageUpload").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        return extFile;
    } 
   //image preview
   $('#imageUpload').change(function(){
    console.log(event)
    let fileType = validateFileType();
    if(fileType ===false){
      var file = document.getElementById("imageUpload");
      file.value = file.defaultValue;
      //let pmg= $('#previewImage').prop('src','');
      toastr.error("Only pdf and image (jpg,png,jpeg) files are allowed!");
      return false;
  }     
    let reader = new FileReader();
    reader.onload = (e) => { 
      $('#previewImage').attr('src', e.target.result);     }
    reader.readAsDataURL(this.files[0]); 

});

//    function loadPreviewImg(input, id) {
//     id = id || '#imagePreview';
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
 
//         reader.onload = function (e) {
//             $(id)
//                     .attr('style', "backgroud-image:url("+e.target.result+")")
                   
//         };
 
//         reader.readAsDataURL(input.files[0]);
//     }
//  }


    //toastr configurations
    toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "5000",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
    };
    
    /* Common messages */
    var proceed_err = "Please fill required fields before proceeding.",
    err_unknown = "Something went wrong. Please try again.";
    
    //Signup Form
    
    var companySignupForm = $("#registration_form");
    companySignupForm.validate({
        
        rules: {
            company_name: {
              required: true,
              minlength:2,
              normalizer:function( value ){
              return $.trim(value);
              }
            },
            phone: {
              required: true,
              digits: true,
              minlength:7,
              maxlength:12
            },
            first_name: {
              required: true,
              maxlength: 60,
              normalizer:function( value ){
                return $.trim(value);
                }
            },
            last_name: {
              required: true,
              maxlength: 60,
              normalizer:function( value ){
                return $.trim(value);
                }
            },
            email: {
              required: true,
              email: true
                },
            password: {
              required: true,
              minlength: 3
            },
            password_confirmation: {
              required: true,
              equalTo: "#password",
              minlength: 3
            },
            country: {
                required: true,
                
              },
          },
    
          messages: {
            company_name: {
              required: "Company name is a required field." 
            },
            phone: {
              required: "Phone number is a required field." ,
              minlength: "Please enter at least 7 digits.",
              maxlength: "Please enter no more than 12 digits."
            },
            first_name: {
              required: "First name is a required field."
            },
            last_name: {
              required: "Last name  is a required field."
            },
            email: {
              required:"Email address is a required field."
             },
            password: {
              required: "Password  is a required field.",
              minlength: "Password should be at least 3 characters.",
            },
            password_confirmation: {
              required: "Confirm password  is a required field.",
              equalTo:  "Please enter confirm password same as password."
            },
            country: {
                required: "County  is a required field."
              },
        }
    });
    
    //Signup submission handler
    $("body").on("click", "#companySignupBtn", function(event) {

    if (companySignupForm.valid() !== true) {
    toastr.error(proceed_err);
    return false;
    }
    
    var _that = $(this),
    form = _that.closest("form"),
    formData = new FormData(form[0]),
    f_action = $(form).attr("action");
    
    console.log(formData);
   // return false;
    $.ajax({
        type: "POST",
        url: f_action,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
        beforeSend: function() {
        show_loader();
        },
        success: function(data, textStatus, jqXHR) {
            hide_loader();
           
            if (data.status == 1) {
                //Success
              
                toastr.success(data.msg);
                //let dataset = {email:data.data.email,password:data.data.password};
               //let val =JSON.stringify(dataset);
                window.location = "/companyLogin";
                window.setTimeout(function() {
                 

                //Redirect to new page
                // window.location = "/loginWithRegistration/"+dataset;
                }, 5000);
            
            } else if (data.status == -1) {
                //Session expired
                toastr.error(data.msg);
                window.setTimeout(function() {
                    //Redirect to login
                   // window.location.href = data.url;
                }, 1000);
            } else {
              console.log(data);
                //Error (Form validation failed)
                toastr.error(data.msg);
            }
    
        }
        
    });
});