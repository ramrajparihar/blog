 
 $('#changeType').change(function(){
    $('.typeBox').hide();
    $('#' + $(this).val()).show();
});

$.validator.addMethod("greaterThan",
    function (value, element, param) {
          var $otherElement = $(param);
          return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });

     var submit_form = $("#submit_form");
    submit_form.validate({
                rules:{
                    // pest_id:{
                    //     required:true
                    // },
                    // action:{
                    //     required:true,
                    //     minlength:2
                    // },
                    
                    value1:{
                        required:true,
                        digits:true
                    },
                    action1:{
                        required:true,
                        minlength:2

                    },
                   
                    value2:{
                        required:true,
                        digits:true
                    },
                    action2:{
                        required:true,
                        minlength:2
                    },
                    value3:{
                        required:true,
                        digits:true
                    },
                    action3:{
                        required:true,
                        minlength:2
                    },
                    tovalue0: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#fromvalue"
                    },
                    fromvalue0: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#fromvalue"
                    },
                    fromvalue1: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#tovalue"
                    },
                    tovalue1: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#fromvalue1"
                    },
                    fromvalue2: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#tovalue1"
                    },
                    tovalue2: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#fromvalue2"
                    },
                    fromvalue3: {
                        required:true,
                        number: true,
                        min: 0,
                       // greaterThan: "#tovalue2"
                    },
                   
                },
                messages:{
                    tovalue: {
                        //required: "value less than" ,
                        greaterThan:"must be greater than first value"
                    },
                    fromvalue1: {
                       // required: "value less than" ,
                        greaterThan:"must be greater than previous level"
                    },
                    tovalue1: {
                       // required: "value less than" ,
                        greaterThan:"must be greater than first value"
                    },
                    fromvalue2: {
                       // required: "value less than" ,
                        greaterThan:"must be greater than previous level"
                    },

                    tovalue2: {
                       // required: "value less than" ,
                        greaterThan:"must be greater than first value"
                    },
                    fromvalue3: {
                       // required: "value less than" ,
                        greaterThan:"must be greater than previous level"
                    },
                }
            });

            $('#fromvalue0').on('focusout',function(){
                let toval = $('#tovalue').val();
                let current_val=$(this).val();
                if(parseInt(toval) < parseInt(current_val)){
                    toastr.error("<h5>first value must be less than second value</h5>");
                    $(this).val('');
                  return false;
                }
            })  
            $('#tovalue0').on('focusout',function(){
                let fromval = $('#fromvalue').val();
                let current_val=$(this).val();
                if(parseInt(fromval) >parseInt(current_val)){
                    toastr.error("<h5>Second value must be greater than first value</h5>");
                    $(this).val('');
                  return false;
                }
                let fromvalue1 = $('#fromvalue1').val();
                if(fromvalue1){
                    if(parseInt(fromvalue1) < parseInt(current_val)){
                    toastr.error("<h5>Second value must be less than level 1</h5>");
                    $(this).val('');
                  return false;
                }
                }
            })  
        
            //Level 1
            $('#fromvalue1').on('focusout',function(){
                let toval = $('#tovalue1').val();
                let current_val=$(this).val();
                let latlevelval =  $('#tovalue').val();
                if(parseInt(latlevelval) >= parseInt(current_val)){
                    toastr.error("<h5>Must be greater than previous level end value</h5>");
                    $(this).val('');
                  return false;
                }
                if(parseInt(toval) < parseInt(current_val)){
                    toastr.error("<h5>First value must be less than second value</h5>");
                    $(this).val('');
                  return false;
                }
            })  
            $('#tovalue1').on('focusout',function(){
                let fromval = $('#fromvalue1').val();
                let current_val=$(this).val();
                let from2val =$('#fromvalue2').val();
        
                if(parseInt(fromval) >parseInt(current_val)){
                    toastr.error("<h5>Second value must be greater than first value</h5>");
                    $(this).val('');
                  return false;
                }
                if(from2val){
                    if(parseInt(from2val) < parseInt(current_val)){
                    toastr.error("<h5>Second value must be less than level 2 </h5>");
                    $(this).val('');
                  return false;
                }
                }
            })  
        
            //Level 2
            $('#fromvalue2').on('focusout',function(){
                let toval = $('#tovalue2').val();
                let current_val=$(this).val();
                let latlevelval =  $('#tovalue1').val();
                if(parseInt(latlevelval) >= parseInt(current_val)){
                    toastr.error("<h5>Must be greater than previous level1 end value</h5>");
                    $(this).val('');
                  return false;
                }
                if(parseInt(toval) < parseInt(current_val)){
                    toastr.error("<h5>first value must be less than second value</h5>");
                    $(this).val('');
                  return false;
                }
            })  
            $('#tovalue2').on('focusout',function(){
                let fromval = $('#fromvalue2').val();
                let current_val=$(this).val();
                let from3val = $('#fromvalue3').val();
                if(parseInt(fromval) >parseInt(current_val)){
                    toastr.error("<h5>Second value must be greater than first value</h5>");
                    $(this).val('');
                  return false;
                }
        
                if(from3val){
                    if(parseInt(from3val) < parseInt(current_val)){
                    toastr.error("<h5>Second value must be less than level 3</h5>");
                    $(this).val('');
                  return false;
                }
                }
            })  
          
          //Level 3
            $('#fromvalue3').on('focusout',function(){
               // let toval = $('#tovalue2').val();
                let current_val=$(this).val();
                let latlevelval =  $('#tovalue2').val();
                if(parseInt(latlevelval) >= parseInt(current_val)){
                    toastr.error("<h5>Must be greater than previous level2 end value</h5>");
                    $(this).val('');
                  return false;
                }
            }) 


            
            //Submit form
            $(document).on('click','#submit_btn',function(){

              
                if (submit_form.valid() !== true) {
                  
                  toastr.error("<h5>Please fill required field before procceding</h5>");
                  return false;
                  }
                  $('#submit_btn').prop('disabled',true);
                  formData = new FormData($("#submit_form")[0]),
                  f_action = $("#submit_form").attr("action");
              
                $.ajax({
                  type: "POST",
                  url: f_action,
                  data: formData,
                  processData: false,
                  contentType: false,
                  dataType: "JSON",
              
                  success: function(data, textStatus, jqXHR) {
                         if (data.status == 1) {
                          toastr.success('<h5>'+data.msg+'</h5>');
                         
                          window.setTimeout(function() {
                          //Redirect to new page
                         
                          window.location = data.data.url;
                          }, 3000);
                      } else if (data.status == -1) {
                        $('#submit_btn').prop('disabled',false);
                          toastr.error('<h5>'+data.msg+'</h5>');
                          window.setTimeout(function() {
                             
                             // window.location = data.url;
                          }, 1000);
                      } else {
                        $('#submit_btn').prop('disabled',false);
                          //Error (Form validation failed)
                          toastr.error(data.msg);
                      }
                  }
                  
              });
        
            }) 
            
            
            //update map color
            $(document).on('click','#update_btn',function(){

              console.log('inside submit');
              if (submit_form.valid() !== true) {
                
                toastr.error("<h5>Please fill required field before procceding</h5>");
                return false;
                }
                $('#submit_btn').prop('disabled',true);
                formData = new FormData($("#submit_form")[0]),
                f_action = $("#submit_form").attr("action");
            
              $.ajax({
                type: "POST",
                url: f_action,
                data: formData,
                processData: false,
                contentType: false,
                dataType: "JSON",
            
                success: function(data, textStatus, jqXHR) {
                       if (data.status == 1) {
                        toastr.success('<h5>'+data.msg+'</h5>');
                       
                        window.setTimeout(function() {
                        //Redirect to new page
                        location.reload()
                        }, 3000);
                    } else if (data.status == -1) {
                      $('#submit_btn').prop('disabled',false);
                        toastr.error('<h5>'+data.msg+'</h5>');
                        window.setTimeout(function() {
                            //Redirect to login
                           // window.location.href = data.url;
                        }, 1000);
                    } else {
                      $('#submit_btn').prop('disabled',false);
                        //Error (Form validation failed)
                        toastr.error(data.msg);
                    }
                }
                
            });
      
          }) 
          
          $(document).on('click','.deleteGuide',function(e){
  
            e.preventDefault();
            console.log('goo');
          
            let  href = $(this).attr('value');
            bootbox.confirm({
                message: "Do you want to delete this colore guideline ?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
          
                    if(result){
                        $.ajax({
                        url: href, 
                        success: function(data){
                            if (data.status == 1) {
                              toastr.success('<h5>'+data.msg+'</h5>');
                            }
                            if (data.status == -1) {
                              toastr.error('<h5>'+data.msg+'</h5>');
                            }
                            window.setTimeout(function() {
                                
                                    location.reload();
                            }, 3000);
                        }
                    });
                    }
                }
                });
          });
     
