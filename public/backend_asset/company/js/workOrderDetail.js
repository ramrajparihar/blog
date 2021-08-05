 
 $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
 $(document).on('click','.edit_corrective_act',function(event){
     event.preventDefault();
     let href =$(this).attr('href');
     console.log(';jii');
     console.log(href);
     $.ajax({
        url:href,
        success:function(data)
        {
           let corrective_action = data[0];
           $('#corrective_act_selector1').empty();
            corrective_action.forEach(function(item){
            $('#corrective_act_selector1').append( `<option value=`+item['corrective_act_id']+`>`+item['corrective_act_name']+`</option>`)
           })

           $('#corr_act_id').val(data[2]);
           $('#corrective_notes').val(data[1]);
           $('#correctveAction').modal('show');
         
           // $('#table_data').html();
        }
    });

 });

 //validate location type
 var corrective_action_form = $("#corrective_action_form");
 corrective_action_form.validate({
      
    rules: {
        corrective_action_notes: {
            required: true,
            minlength:2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
        },
   
  });
 //update_sanitation
 $(document).on('click','#action_update',function(event){
    if (corrective_action_form.valid() !== true) {
       
        toastr.error("<h5>Please fill required fields before procceding</h5>");
        return false;
    }
    formData = new FormData($("#corrective_action_form")[0]),
    f_action = $("#corrective_action_form").attr("action");

//append customer id with form data
var work_order_id=$('#work_order_id').val();
var report_id=$('#report_id').val();
let wor_cal_id = $('#corr_act_id').val();
formData.append('wor_cal_id',wor_cal_id);
$('#action_update').prop('disabled',true);
$.ajax({
    type: "POST",
    url: f_action,
    data: formData,
    processData: false,
    contentType: false,
    dataType: "JSON",

    success: function(data, textStatus, jqXHR) {
      
       
        if (data.status == 1) {
            $('#correctveAction').modal('hide');
            toastr.success('<h5>'+data.msg+'</h5>');
           
            window.setTimeout(function() {
            //Redirect to new page
             window.location = data.data.route+'/'+work_order_id+"/"+report_id;
            }, 3000);
        } else if (data.status == -1) {
            $('#action_update').prop('disabled',false);
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
    }
    
});

 });

 //validate location type
 var add_corrective_action_form = $("#add_corrective_action_form");
 add_corrective_action_form.validate({
      
    rules: {
        corrective_action_notes: {
            required: true,
            minlength:2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
        },
   
  });

 $(document).on('click','#action_add',function(event){
    if (add_corrective_action_form.valid() !== true) {
       
    toastr.error("<h5>Please fill required field before procceding</h5>");
    return false;
    }
    $('#action_add').prop('disabled',true);
    formData = new FormData($("#add_corrective_action_form")[0]),
    f_action = $("#add_corrective_action_form").attr("action");

//append customer id with form data
var work_order_id=$('#work_order_id').val();
var report_id=$('#report_id').val();
let wor_cal_id = $('#corr_act_id').val();
formData.append('wo_id',work_order_id);
formData.append('report_id',report_id);
formData.append('wor_cal_id',wor_cal_id);
$.ajax({
    type: "POST",
    url: f_action,
    data: formData,
    processData: false,
    contentType: false,
    dataType: "JSON",

    success: function(data, textStatus, jqXHR) {
      
        if (data.status == 1) {
            $('#correctveAction').modal('hide');
            toastr.success('<h5>'+data.msg+'</h5>');
            window.setTimeout(function() {
            //Redirect to new page
             window.location = data.data.route+'/'+work_order_id+"/"+report_id;
            }, 3000);
        } else if (data.status == -1) {
            $('#action_add').prop('disabled',false);
            toastr.error('<h5>'+data.msg+'</h5>');
            window.setTimeout(function() {
              
            }, 1000);
        } else {
            $('#action_add').prop('disabled',false);
            //Error (Form validation failed)
            toastr.error(data.msg);
        }
    }
    
});

 });

 var sanitation_update = $("#sanitation_update");
 sanitation_update.validate({
      
    rules: {
        wor_sanitation_notes: {
            required: true,
            minlength:2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
        },
   
  });

 $(document).on('click','#update_sanitations',function(event){
 if (sanitation_update.valid() !== true) {
       
    toastr.error("Please fill required field before procceding");
    return false;
    }
   var formData = new FormData($("#sanitation_update")[0]),
    f_action = $("#sanitation_update").attr("action");
console.log(f_action);
//append customer id with form data
var report_id=$('#report_id').val();
var work_order_id=$('#work_order_id').val();
let wor_sanitation_id = $('#wor_sanitation_id').val();
formData.append('wor_sanitation_id',wor_sanitation_id);
formData.append('wo_id',work_order_id);
formData.append('report_id',report_id);
f_action
$.ajax({
    type: "POST",
    url: f_action,
    data: formData,
    processData: false,
    contentType: false,
    dataType: "JSON",

    success: function(data, textStatus, jqXHR) {
      
       console.log(data);
        if (data.status == 1) {
            $('#sanitation').modal('hide');
            toastr.success('<h5>'+data.msg+'</h5>');
            
            window.setTimeout(function() {
            //Redirect to new page
             window.location = data.data.route+'/'+work_order_id+'/'+report_id;
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
    }
    
});

 });

 var update_ipm_form = $("#update_ipm_form");
 update_ipm_form.validate({
      
    rules: {
        wor_ipm_notes: {
            required: true,
            minlength:2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
          
        },
   
  });
$(document).on('click','#update_ipm',function(event){
 if (update_ipm_form.valid() !== true) {
       
    toastr.error("<h5>Please fill required field before procceding</h5>");
    return false;
    }
    formData = new FormData($("#update_ipm_form")[0]),
    f_action = $("#update_ipm_form").attr("action");
console.log(f_action);
//append customer id with form data
var work_order_id=$('#work_order_id').val();
var report_id=$('#report_id').val();
let wor_ipm_id = $('#wor_ipm_id').val();
formData.append('wor_ipm_id',wor_ipm_id);
formData.append('wo_id',work_order_id);
formData.append('report_id',report_id);
f_action
$.ajax({
    type: "POST",
    url: f_action,
    data: formData,
    processData: false,
    contentType: false,
    dataType: "JSON",

    success: function(data, textStatus, jqXHR) {
      
       console.log(data);
        if (data.status == 1) {
            $('#ipmPractices').modal('hide');
            toastr.success('<h5>'+data.msg+'</h5>');
            
            window.setTimeout(function() {
            //Redirect to new page
             window.location = data.data.route+'/'+work_order_id+"/"+report_id;
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
    }
    
});

 });

//update_photo
$(document).on('click','.update_photo',function(event){
    event.preventDefault();
    let href =$(this).attr('href');
    console.log(';jii');
    console.log(href);
    $.ajax({
       url:href,
       success:function(data)
       {
           $('#imgSample').attr('src',"/uploads/wo_report_photo/"+data.wor_photo);
           $('#photo_note').text(data.wor_photo_description);
           $('#work_photo_id').val(data.wor_photo_id);
       }
    
   });

});


 //image preview
 $('#uploadFilePhoto').change(function(){
          
    let reader = new FileReader();
    reader.onload = (e) => { 
      $('#imgSample').attr('src', e.target.result);     }
    reader.readAsDataURL(this.files[0]); 

});
$('#uploadFile').change(function(){
   // $('#file-div').hide(); 
    $('#show-img').show(); 
    let reader = new FileReader();
    reader.onload = (e) => { 
      $('#photoPreview').attr('src', e.target.result);     }
    reader.readAsDataURL(this.files[0]); 

});

//photoPreview

var update_wor_photo = $("#update_wor_photo");
update_wor_photo.validate({
      
    rules: {
        photo_note: {
            required: true,
            minlength:2
          },
        },
   
  });
//upload_photo
$(document).on('click','#update_ipm_photo',function(event){
    if (update_wor_photo.valid() !== true) {
          
       toastr.error("<h5>Please fill required field before procceding</h5>");
       return false;
       }
       formData = new FormData($("#update_wor_photo")[0]),
       f_action = $("#update_wor_photo").attr("action");
   console.log(f_action);
   //append customer id with form data
   var work_order_id=$('#work_order_id').val();
   let work_photo_id = $('#work_photo_id').val();
   formData.append('work_photo_id',work_photo_id);
   formData.append('wo_id',work_order_id);
   f_action
   $.ajax({
       type: "POST",
       url: f_action,
       data: formData,
       processData: false,
       contentType: false,
       dataType: "JSON",
   
       success: function(data, textStatus, jqXHR) {
         
          console.log(data);
           if (data.status == 1) {
            $('#editPhoto').modal('hide');
               toastr.success('<h5>'+data.msg+'</h5>');
              
               var report_id=$('#report_id').val();
               window.setTimeout(function() {
               //Redirect to new page
               window.location = data.data.route+'/'+work_order_id+"/"+report_id;
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
       }
       
   });
   
    });

    var upload_wor_photo = $("#upload_wor_photo");
    upload_wor_photo.validate({
      
    rules: {
        wor_photo_note: {
            required: true,
            minlength:2,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
        file:{
            required:true,
        },
        },
   
  });
//upload_photo
$(document).on('click','#upload_photo',function(event){
    if (upload_wor_photo.valid() !== true) {
          
       toastr.error("Please fill required field before procceding");
       return false;
       }
       formData = new FormData($("#upload_wor_photo")[0]),
       f_action = $("#upload_wor_photo").attr("action");
   
   //append customer id with form data
   var work_order_id=$('#work_order_id').val();
   var report_id=$('#report_id').val();
    formData.append('wo_id',work_order_id);
    formData.append('report_id',report_id);
   f_action
   $.ajax({
       type: "POST",
       url: f_action,
       data: formData,
       processData: false,
       contentType: false,
       dataType: "JSON",
   
       success: function(data, textStatus, jqXHR) {
         
          console.log(data);
           if (data.status == 1) {
             $('#uploadPhoto').modal('hide');
               toastr.success('<h5>'+data.msg+'</h5>');
              
               window.setTimeout(function() {
               //Redirect to new page
                window.location = data.data.route+'/'+work_order_id+"/"+report_id;
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
       }
       
   });
   
    });

    //delete Photo
    $(document).on('click','.delete_photo',function(){

        event.preventDefault();
       // $('div').removeClass("fade");
        let href =$(this).attr('href');
        var report_id=$('#report_id').val();
        var work_order_id=$('#work_order_id').val();
       
      bootbox.confirm({
          message: "Do you want to delete this photo ?",
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
                      window.setTimeout(function() {
                        window.location = data.data.route+'/'+work_order_id+"/"+report_id;  
                      }, 3000);
                  }
              });
              }
          }
          }).removeClass('fade');
    }); 

    //delete_action
    $(document).on('click','.delete_action',function(){

        event.preventDefault();
        //$('div').removeClass("fade");
        let href =$(this).attr('href');
        var report_id=$('#report_id').val();
        var work_order_id=$('#work_order_id').val();
       
      bootbox.confirm({
          message: "Do you want to delete this corrective action ?",
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
                      window.setTimeout(function() {
                          //Redirect to new page
                          window.location = data.data.route+'/'+work_order_id+"/"+report_id;  
                      }, 3000);
                  }
              });
              }
          }
          }).removeClass('fade');
    }); 


    var note_form = $("#note_form");
    note_form.validate({
      
    rules: {
        report_note: {
            required: true,
            minlength:2
          },
       
    },
   
  });    

//Save Note
$(document).on('click','#addNote',function(){
    if (note_form.valid() !== true) {
        toastr.error("Please fill required field before procceding");
        return false;
    }
let report_note = $('#report_note').val();
var work_order_id=$('#work_order_id').val();
var report_id=$('#report_id').val();
   //send ajax request
    $.post( "/reportNote", { report_note:report_note, report_id: report_id })
    .done(function( data ) {
        if (data.status == 1) {
        $('#editNotes').modal('hide');
        toastr.success('<h5>'+data.msg+'</h5>');
        }
        window.setTimeout(function() {
                window.location = data.data.route+'/'+work_order_id+'/'+report_id;
        }, 3000);
  });
})    


//Save Diagram
var diagramPad = new SignaturePad(document.getElementById('signature-pad-diagram'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'green'
  });
  var saveDiagram = document.getElementById('save-diagram');
  var cancelDiagram = document.getElementById('clear-diagram');
  cancelDiagram.addEventListener('click', function (event) {
    diagramPad.clear();
  });

  saveDiagram.addEventListener('click', function (event) {
   console.log('diagramaa');
    //saveDiagram.addEventListener('click', function (event) {
        var diagramImg = diagramPad.toDataURL('image/png');

        let block = diagramImg.split(";");
        // Get the content type of the image
        let contentTypes = block[0].split(":")[1];// In this case "image/png"
        // get the real base64 content of the file
        let realData = block[1].split(",")[1];
        let diagramThumb = b64toBlob(realData,contentTypes,'');
        var work_order_id=$('#work_order_id').val();
      var report_id=$('#report_id').val();
      // Send data to server instead...
    let formData= new FormData();
    console.log(diagramThumb);
    formData.append('diagram',diagramThumb,'diagramThumb.png');
    formData.append('report_id',report_id);
    formData.append('wo_id',work_order_id);
    $.ajax({
        type:'POST',
        url: '/diagram', 
        data:formData,
        processData: false,
       contentType: false,
      
        success: function(data){
            console.log(data);
            if (data.status == 1) {
                $('#diagram').modal('hide');
                  toastr.success("<h5>"+data.msg+"</h5>");
                 
                  window.setTimeout(function() {
                  //Redirect to new page
                   window.location = data.data.route+'/'+work_order_id+"/"+report_id;
                  }, 3000);
              }
        }
    });


  })


  //save Signature
  saveButton.addEventListener('click', function (event) {
    console.log('signature');
     //saveDiagram.addEventListener('click', function (event) {
        if( signaturePad.isEmpty()){
            toastr.error("<h5>Please draw signature</h5>");
            return false;            
        }
         var diagramImg = signaturePad.toDataURL('image/png');
 
         let block = diagramImg.split(";");
         // Get the content type of the image
         let contentTypes = block[0].split(":")[1];// In this case "image/png"
         // get the real base64 content of the file
         let realData = block[1].split(",")[1];
         let diagramThumb = b64toBlob(realData,contentTypes,'');
         var work_order_id=$('#work_order_id').val();
       var report_id=$('#report_id').val();
       // Send data to server instead...
     let formData= new FormData();
     console.log(diagramThumb);
     formData.append('signature',diagramThumb,'signature.png');
     formData.append('report_id',report_id);
     formData.append('wo_id',work_order_id);
     $.ajax({
         type:'POST',
         url: '/signature', 
         data:formData,
         processData: false,
        contentType: false,
       
         success: function(data){
             console.log(data);
             if (data.status == 1) {
                 $('#signature').modal('hide');
                   toastr.success("<h5>"+data.msg+"</h5>");
                  
                   window.setTimeout(function() {
                   //Redirect to new page
                    window.location = data.data.route+'/'+work_order_id+"/"+report_id;
                   }, 3000);
               }
         }
     });
 
 
   })

  //change base 64 to blob image
  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      var byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
      
    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  $(document).on('click','#save-report',function(){

    let report_id = $(this).attr('value');
    let url = '/save_report/'+report_id;
    $.ajax({
        type:'get',
        url: url, 
       
        success: function(data){
           
            if (data.status == 1) {
               // $('#signature').modal('hide');
                  toastr.success("<h5>"+data.msg+"</h5>");
                 
                  window.setTimeout(function() {
                  //Redirect to new page
                  window.location.reload();
                  // window.location = data.data.route+'/'+work_order_id+"/"+report_id;
                  }, 3000);
              }
        }
    });
  })


 $(".cancel_sanitation").click(function() {
    $("#sanitation_update").validate().resetForm();
    //update_cred.resetForm();
})
$(".cancel_ipm").click(function() {
   // $("textarea[name=wor_ipm_notes]").val('');
    $("#update_ipm_form").validate().resetForm();
    //update_cred.resetForm();
})
$(".cancel_photo").click(function() {
    $("#update_wor_photo").validate().resetForm();
    //update_cred.resetForm();
})
$(".cancel_photo").click(function() {
   
    $("#photoPreview").attr('src','');
    $("#upload_wor_photo").validate().resetForm();
    $("#upload_wor_photo")[0].reset();
})

//cancel note
$(".cancel_note").click(function() {
    $("#note_form").validate().resetForm();
    //update_cred.resetForm();
})
 //cancel_photo
