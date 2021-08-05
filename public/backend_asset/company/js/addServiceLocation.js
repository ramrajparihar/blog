contact_arr = new Array();
update_email = null;
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
var submit_form = $("#submit_form");
 submit_form.validate({
      
    rules: {
       
          location_name: {
            required: true,
            minlength: 2,
          },
          address: {
            required: true,
            minlength: 2,
          },
          city: {
            required: true,
            minlength: 2,
          },
          state: {
            required: true,
            minlength: 2,
          },
          county: {
            required: true,
            minlength: 2,
          },
          location_type: {
            required: true,
            
          },
          route: {
            required: true,
           
          },
        //   'site_contact[]':{
        //       required:true,
             
        //   }
          
         
        },
        errorPlacement: function(error, element) {
          if(element.attr("name") == "location_type") {
            error.appendTo('#error_type' );
          }else if(element.attr("name") == "route"){
            error.appendTo('#route_type' );
          } 
          else if(element.attr("name") == "site_contact[]"){
            error.appendTo('#site_contact_type' );
          } 
          else {
            error.insertAfter(element);
          }
        }
        // messages: {
        //     location_name: {
        //         required: "Name is a required field" 
        //       },
            
        // }
    
  });

  function show_loader() {
    $("#gs_front_loader").show();
    }

    function hide_loader() {
    $("#gs_front_loader").hide();
    }   

  var site_form = $("#contact_form");
  site_form.validate({
    rules: {
        site_contact_name: {
            required: true,
            minlength: 2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
        site_contact_phoneNo: {
          required: true,
          digits:true,
          maxlength:12,
          minlength:7
        },
        site_contact_email: {
            required: true,
            email: true,
            remote: {
              url: "/check/duplicate/email",
              type: "post",
              data: {
                  email: function() {
                  return $("input[name=site_contact_email]").val();
                  }
              }
          }
        },
      },
      messages:{
        site_contact_email: {
            required: "Email is a required field." ,
            remote: "Email already in use!"
          },

          site_contact_phoneNo:{
            minlength: "Please enter at least 7 digits.",
            maxlength: "Please enter no more than 12 digits."
          },
      }

});


// Submit service location data
$(document).on('click','#submit_btn',function(event){ 
    event.preventDefault();

   let slength =$('.AddedContact').children().length;
   if(slength == 0){
    
    $("#siteContact" ).rules( "add", {
        required: true,
       // minlength: 2,
        messages: {
          required: "This field is required.",
         // minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
        }
      });
   
    }else{
        $( "#siteContact" ).rules( "remove" );
    }
   toastr.remove();
    if (submit_form.valid() !== true) {
       toastr.error(proceed_err);
        return false;
    }

    newobj=JSON.stringify(contact_arr);
    var formData = new FormData($('#submit_form')[0]);
  
    formData.append('contact_info',newobj);
    let f_action=$("#submit_form").attr("action")
    
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
           console.log(data);
            if (data.status == 1) {
                toastr.success('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                //Redirect to new page
                 window.location = data.data.route;
                }, 3000);
            } else if (data.status == -1) {
                //Session expired
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                    //Redirect to login
                   // window.location.href = data.url;
                }, 1000);
            } else {
              console.log(data);
                //Error (Form validation failed)
                toastr.error(data.msg);
            }
        },
        error:function(reject){
            hide_loader();
         let error =reject.responseJSON;
         $.each(error.errors ,function(k,v){
          toastr.error('<h5>'+v+'</h5>');
          return;
         });
         // console.log(error.errors);
        }
        
    });

         
});

$(document).on('click','#add_site_contact',function(event){ 
    event.preventDefault();
    toastr.remove();
    if (site_form.valid() !== true) {
       toastr.error(proceed_err);
        return false;
    }
    let clength =$('.iti__selected-flag').length;
    clength = clength-1;
    let  country_code = null;
    console.log(clength)
   let changeval=$('.iti__selected-flag').each(function(i,j){
     if(i == clength) {
     let  dataContry= $(this).attr('title');
     country_code =dataContry.split('+')[1];
     }
 
 })

    let formData = new FormData($('#contact_form')[0]);
    formData.append('country_code',country_code);
   var obj = {};
   for(var value of formData.entries()){
       vall = value[0];
       obj[vall] = value[1];
   }
   contact_arr.push(obj);
   console.log(contact_arr);
   $('.added_item').remove();
   for(var contact of contact_arr){
            // if(contact['email1'] == email || email == cust_email || email == default_email){
            //     return true;
            // }
           let full_name = contact['fname1'];
        
        $('.AddedContact').append(`<div class="contactIttem added_item">
                <div class="nameInfo">
                    <h2>`+contact['site_contact_name']+`</h2>
                    <div class="contactAction">
                        <a class="icoEdit" id=`+contact['site_contact_email']+` href=""><i class="fa fa-edit"></i></a>
                        <a class="icoTrash" name=`+contact['site_contact_email']+` href=""><i class="fa fa-trash"></i></a>
                    </div>
                </div>
                <div class="othInfo">
                    <p class="cntInfoMore">
                        <span><i class="fa fa-envelope"></i> ` +contact['site_contact_email']+`</span>
                        <span><i class="fa fa-phone fa-rotate-90"></i> (+`+contact['country_code']+`) `+contact['site_contact_phoneNo']+`</span></p>

                    </div>
            </div>`)
   }

   $('input[name=email1]').val('');
   $('#moreContact').modal('hide')
   $('.modal-backdrop').removeClass('modal-backdrop');
   //$('#moreContact').modal('hide')
   document.getElementById('contact_form').reset();
//siteContact
$("#siteContact").valid();
$('#siteContact-error').remove();
 //  $("input[name='site_contact[]']").valid();
         
});


$('input[name=site_contact_email]').focusout(function(){
    let email= $('input[name=site_contact_email]').val();
   
     let status =checkDuplicateEmail();
     if(status == true){
         toastr.error('<h5>'+email+' already added by you !</h5>')
         let validator= $('#contact_form').validate();
         validator.showErrors({
             'site_contact_email':"Require unique email"
         })
         $('input[name=site_contact_email]').val('');
         return false;
        // $('input[name=email]').val('');
     }
 
 })

 function checkDuplicateEmail(){
    let email =$('input[name=site_contact_email]').val();
    email = email.toLowerCase();
    if(!email){
        email = '0';
    }
      
    //check duplicate email in site contact array
    if(contact_arr.length > 0){
        for(var contact of contact_arr){
           if(contact['site_contact_email'] == email ){
                return true;
            }
        }
    }
    return false;
}



$('.cancel_contact').click(function(){
 // document.getElementById('#contact_form').reset;
    $("#contact_form").validate().resetForm();
   //site_form.reset();
    $('#contact_form')[0].reset();
})

//Reset edit contact form
$('.cancel_edit').click(function(){
    $("#edit_contact_form").validate().resetForm();
    $("#edit_contact_form")[0].reset();
})