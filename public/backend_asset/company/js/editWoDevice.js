
$(document).ready(function(){
    $(".checked_device_tab").hide()
    $("#serviceLocation").hide()
    //serviceLocation
   let device_text = $(".addActive").find('h4').text();
    $('#device_text').text(device_text)
   let qrcode_text =  $(".addActive").find('p').text();
    $('#qrcode_text').text(qrcode_text)
   let device_allot_id=$(".addActive").find('h4').attr('name');
    $('#device_allot_id').val(device_allot_id);
   
    //$(".checked_device_tab").hide()
})
$(document).on('click','.uncheck_device',function(){
    refreshModal();
    $(".checked_device_tab").hide();
    $("#serviceLocation").hide()
    $(".uncheck_device").removeClass('activeClass addActive ')

   let device_text = $(this).find('h4').text();
   $('#device_text').text(device_text)

   
   
   let qrcode_text = $(this).find('p').text();
   $('#qrcode_text').text(qrcode_text)

    $(this).addClass('activeClass addActive');

    let device_allot_id=$(".addActive").find('h4').attr('name');
    
   $('#device_allot_id').val(device_allot_id);

})

$(document).on('click','.uncheck_device',function(){
    values = undefined;
    valuess = undefined;
    refreshModal();
});

$(document).on('click','.checked_tab',function(){
  $(".detail_body").hide();
  $(".checked_device_tab").show();
  $("#serviceLocation").show()
  let device_text=  $('.clicked_check_device').find('h4').text();
  let qrcode_text = $('.clicked_check_device').find('p').text();
  $('#checked_device_text').text(device_text)
  $('#checked_qrcode_text').text(qrcode_text)
   wor_device_id=$('.clicked_check_device').find('h4').attr('value')
//console.log(device_wor_id);
 let device_allot_id=$(".clicked_check_device").find('h4').attr('name');
   $('#device_allot_id').val(device_allot_id);
//    console.log("device_allot_id");
//    console.log(device_allot_id);
sendAjax(wor_device_id)
})

//Click checked device ,fill data in checked tab and remove active class from other device
$(document).on('click','.checked_device',function(){
    $(".detail_body").hide();
    $(".checked_device_tab").show();
    $("#serviceLocation").show();
  $('.checked_device').removeClass('activeClass')
    $(this).addClass('activeClass')
   let device_text=  $(this).find('h4').text();
   let qrcode_text = $(this).find('p').text();
   $('#checked_device_text').text(device_text)
   $('#checked_qrcode_text').text(qrcode_text)

    wor_device_id=  $(this).find('h4').attr('value');
    let device_allot_id=$(this).find('h4').attr('name');
    
   $('#device_allot_id').val(device_allot_id);
   console.log("device_allot_id");
   console.log(device_allot_id);
   //$('#update_capture').removeAttr('data-dismiss');
   sendAjax(wor_device_id)
   //send ajax
  
    //checked_device_text

  })

  arr1 = new Array();
  arr2 = new Array();
  function addCapture(item,index){
   
    // values = undefined;
    // valuess = undefined;
    //remove all child except first of main div,becaure when we click on checked device
    // main div added in multiple time
   // arr1.push(item.pest_id)
    //values = new Array()
   
    // values= arr1;
    // arr2.push(item.wor_capture_quantity)
    
    // valuess=new Array();
    // valuess = arr2;
    // console.log(values);
    // console.log("itemss");
    // console.log(item);
     

    if(index ==0){
    $(".select1 option[value="+item.pest_id+"]").remove();
    $('.select1').prepend(`<option selected value=`+item.pest_id+`>`+item.pest_name+`</option>`);
    $("#captureMainDiv .captureDiv input[name='qauntity[]']").first().val(item.wor_capture_quantity);
     }
    else{
        let divs = $("#captureMainDiv").children().first().clone();

   divs.appendTo("#captureMainDiv");
   let latchild=$('#captureMainDiv').children().last();
   latchild.find(".select1 option[value="+item.pest_id+"]").remove();
   latchild.find(".select1").prepend(`<option selected value=`+item.pest_id+`>`+item.pest_name+`</option>`);

   let text =$("#captureMainDiv .captureDiv input[name='qauntity[]']").last().val(item.wor_capture_quantity);
    }
  }

  function sendAjax(wor_device_id){
      

    $.get( "/checked_device_detail", { wor_device_id: wor_device_id} )
    .done(function( data ) {
        console.log(data);
        let deviceDetail = data[0];
        let capturedList = data[1];
        //remove all capture div except first
        $("#captureMainDiv").children().not(':first').remove();
        if(capturedList){
            //capturedList.forEach(function)
           capturedList.forEach(addCapture);
           if(capturedList.length >0){
           $('#capture_text1').text("("+capturedList.length+")").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
            }
            if(capturedList.length == 0){
                $("#captureMainDiv").children().not(':first').remove();
                $('#capture_text1').text("").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
                $("#captureMainDiv .captureDiv input[name='qauntity[]']").last().val('');
                values = undefined;
                valuess = undefined;
            }
        }

        //device remove or not
        if(deviceDetail.wor_device_status == 1){
            $('input[name=removed1]').prop('checked',true);
        }else{
            $('input[name=removed1]').prop('checked',false);
        }
        
      //set trap condition
     if(deviceDetail.trap_cond_id){
          let trap_radio_id = 'trap_'+deviceDetail.trap_cond_id;
          $('#condition_text1').text(deviceDetail.trap_cond_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
          $('#'+trap_radio_id).prop('checked',true);
      }else{
         
          $('.condition_ul li input:radio').prop('checked',false);
          $('#condition_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
      }
      //set bait condition
     if(deviceDetail.bait_cond_id){
      let bait_cond = 'bait_cond_'+deviceDetail.bait_cond_id;
      $('#bait_text1').text(deviceDetail.bait_cond_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
      $('#'+bait_cond).prop('checked',true);
      }else{
          
          $('.bait_condition_ul li input:radio').prop('checked',false);
          $('#bait_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
      }
  
      //Material name 
       //set bait condition
     if(deviceDetail.approved_mat_id){
      let material = 'material_'+deviceDetail.approved_mat_id;
      $('#material_text1').text(deviceDetail.material_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
      $('#'+material).prop('checked',true);
      }else{
         
          $('.material_ul li input:radio').prop('checked',false);
          $('#material_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
      }

      //Captured text

      
  
      //Evidence 
      if(deviceDetail.evidence_id){
          let evidence = 'evidence_'+deviceDetail.evidence_id;
          $('#evidence_text1').text(deviceDetail.evidence_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
          $('#'+evidence).prop('checked',true);
          }else{
             
              $('.evidence_ul li input:radio').prop('checked',false);
              $('#evidence_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
          }

        values = $("input[name='qauntity[]']").map(function(){
            return $(this).val();
        }).get();
        console.log(values.length);  
    
        valuess = $("select[name='selected_pest[]']").map(function(){
            return $(this).val();
        }).get();
  
       //note
       if(deviceDetail.wor_device_notes){
          //let evidence = 'evidence_'+data.material_id;
          $('#note1').text(deviceDetail.wor_device_notes);
          //$('#'+evidence).prop('checked',true);
          }else{
              $('#note1').text('');
          }  
  
  
    });
  }


  function refreshModal(){
    // document.getElementById("update_check_form").reset();
    // $('#update_check_form').reset();
     console.log('refreshmodal');
     $('.condition_ul li input:radio').prop('checked',false);
     $('.bait_condition_ul li input:radio').prop('checked',false);
     $('.material_ul li input:radio').prop('checked',false);
     $('.evidence_ul li input:radio').prop('checked',false);
 
     $('#material_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $('#condition_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $('#evidence_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $('#bait_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $('#capture_text1').text("").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $('#capture_text').text("").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
     $("#captureMainDiv").children().not(':first').remove();
     $("#captureMainDiv .captureDiv input[name='qauntity[]']").last().val("");
 }
//clicked_check_device

$(document).on('click','.uncheck_tab',function(){
    refreshModal();
    $(".detail_body").show();
    $(".checked_device_tab").hide()
    let device_allot_id=$(".addActive").find('h4').attr('name');
   
   $('#device_allot_id').val(device_allot_id);
  })
//change trap condition checked_tab
$(document).on('click','#update_condition',function(){
    var radioValue = $("input[name='trap_condition']:checked").val();
    var condition_name = $("input[name='trap_condition']:checked").parents('li').find('h6').text();
    $('#condition_text').text(condition_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#condition_text').val(radioValue);
  
    //if checked device detail open than it would work
    $('#condition_text1').text(condition_name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#condition_text1').val(radioValue);
   
})

//change bait condition
$(document).on('click','#update_bait',function(){
    var radioValue = $("input[name='bait_condition']:checked").val();
    var name = $("input[name='bait_condition']:checked").parents('li').find('h6').text();
    $('#bait_text').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#bait_text').val(radioValue);

    //if checked device detail open than it would work
    $('#bait_text1').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#bait_text1').val(radioValue);
})

//change evidence 
$(document).on('click','#update_evidence',function(){
    var radioValue = $("input[name='evidence']:checked").val();
    var name = $("input[name='evidence']:checked").parents('li').find('h6').text();
    $('#evidence_text').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#evidence_text').val(radioValue);

    $('#evidence_text1').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#evidence_text1').val(radioValue);
    $('#evidence').modal('hide');
})

//change evidence 
$(document).on('click','#update_material',function(){
    var radioValue = $("input[name='material']:checked").val();
    var name = $("input[name='material']:checked").parents('li').find('h6').text();
    $('#material_text').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);

    $('#material_text').val(radioValue);

    $('#material_text1').text(name).append(`<span class="ion ion-ios-arrow-forward ml-4">`);

    $('#material_text1').val(radioValue);
})


$(document).on('click','.addMoreCapturebtn',function(){
    console.log('koooo');

   let divs = $("#captureMainDiv").children().first().clone();

   divs.appendTo("#captureMainDiv");

   let text =$("#captureMainDiv .captureDiv input[name='qauntity[]']").last().val("");
console.log(text);


   // $(".captureDiv").clone().appendTo("#captureMainDiv");
})

$(document).on('click','.delteBlck',function(){
    console.log('kooooe');
    let tabid = $("#tabPan .active").attr("id");
    
    console.log(tabid);
    let count =$("#captureMainDiv").children().length;
    console.log(count);
    if(tabid =="myuncheck") {
    if(count ==2 ){
        return false;
    }}
    if(tabid == "mycheck"){
        if(count ==1 ){
            return false;
        }
    }
    
    $(this).closest('.captureDiv').remove();
    let count1 =$("#captureMainDiv").children().length;
    $('#capture_text1').text("("+count1+")").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
})

captured_form = $('#captured_form');
captured_form.validate({
    rules:{
        "qauntity[]":{
            required:true,
            digits:true,
            notEqual:0
        }
       

    },

    messages:{
        "qauntity[]":{
            notEqual:"Quantity can not be zero."
        }
    }
})

jQuery.validator.addMethod("notEqual", function (value, element, param) { // Adding rules for Amount(Not equal to zero)
    return this.optional(element) || value != '0';
});
// $(document).on('keyup','input[name=qauntity[]]',function(){ 
//     captured_form.valid()
// })

$(document).on('click','#update_capture',function(){
    event.preventDefault();
   
   // event.preventDefault();
   // $('#update_capture').removeAttr('data-dismiss');
    if (captured_form.valid() !== true) {
        event.preventDefault();
        //$('#update_capture').removeAttr('data-dismiss');
        toastr.error(proceed_err)
        
       // captured_form.valid()
         return false;
     }
    // $('#update_capture').attr('data-dismiss','modal'); 
     $('#captureMdl').modal('hide');
  // ;
  // let vall= $("input[name='qauntity[]']").valid();
   if(!$("input[name='qauntity[]']").valid()){
       return false;
   }

    values = $("input[name='qauntity[]']").map(function(){
                return $(this).val();
            }).get();
        console.log(values.length);  
        
     valuess = $("select[name='selected_pest[]']").map(function(){
        return $(this).val();
    }).get();
    console.log(valuess);     
 $('#capture_text').text("("+values.length+")").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
 $('#capture_text1').text("("+values.length+")").append(`<span class="ion ion-ios-arrow-forward ml-4">`);
 
   // $('#captureMdl').modal('hide').css('opacity','0');
   // $('.modal-backdrop.show').css('opacity','0');

})

// $("input[name='qauntity[]']").mouseup(function(){
//     if($this.val() == 0){

//     }
// })


//Save Device save_device update_capture;
$(document).on('click','#update_material',function(){
    var trap_id = $("input[name='trap_condition']:checked").val();
    var bait_condition = $("input[name='bait_condition']:checked").val();
    var evidence = $("input[name='evidence']:checked").val();
    var material = $("input[name='material']:checked").val();
    var note = $("input[name='material']:checked").val();
});


$(document).on('click','.cancel_trap',function(){
    $("input[name='trap_condition']:checked").prop('checked',false)
    $('#condition_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#condition_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
})

$(document).on('click','.cancel_bait',function(){
    $("input[name='bait_condition']:checked").prop('checked',false)
    $('#bait_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#bait_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);;
})

$(document).on('click','.cancel_evidence',function(){
    $("input[name='evidence']:checked").prop('checked',false)
    $('#evidence_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#evidence_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
})

$(document).on('click','.cancel_material',function(){
    $("input[name='material']:checked").prop('checked',false)
    $('#material_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#material_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
})

$(document).on('click','.cancel_capture',function(){
    $('.captureDiv').slice(1).remove();
   // $('.captureDiv').remove();
  //  $("input[name='material']:checked").prop('checked',false)
  $("#captureMainDiv .captureDiv input[name='qauntity[]']").last().val('')
  values = undefined;
  valuess = undefined; 
    $('#capture_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    $('#capture_text1').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);
    captured_form.validate().resetForm();
    //$('#capture_text').text('').append(`<span class="ion ion-ios-arrow-forward ml-4">`);;
})


var update_devices = $('#update_device');
update_devices.validate({
      
    rules: {
        notes: {
            required: false,
            maxlength:2000,
            normalizer:function( value ){
                return $.trim(value);
            }
          },
          notes1:{
              required:false,
              maxlength:2000,
              normalizer:function( value ){
                return $.trim(value);
            }
          }
        },
   
  });
//cancel_capture
$(document).on('click','#save_device',function(){

    if (update_devices.valid() !== true) {
        
        toastr.error(proceed_err);
        return false;
    }
    var trap_id = $("input[name='trap_condition']:checked").val();
    var bait_condition = $("input[name='bait_condition']:checked").val();
    var evidence = $("input[name='evidence']:checked").val();
    var material = $("input[name='material']:checked").val();
    var note = $("input[name='material']:checked").val();

   var work_order_id = $('#work_order_id').val();
   var report_id = $('#report_id').val();
   $('#save_device').prop('disabled',true);
    let formData =new FormData($("#update_device")[0]);
    formData.append('trap_cond',trap_id);
    formData.append('bait_condition',bait_condition)
    formData.append('evidence',evidence)
    formData.append('material',material)
    
    if(typeof values !== 'undefined'){
    formData.append('quantity',values)
    }
   
    if(typeof valuess !== 'undefined'){
    formData.append('pest',valuess)
    }


    f_action = $("#update_device").attr("action");

    $.ajax({
        type: "POST",
        url: f_action,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
        // beforeSend: function() {
        // show_loader();
        // },
        success: function(data, textStatus, jqXHR) {
           
            if (data.status == 1) {
            
                toastr.success('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                //Redirect to new page
                window.location = data.data.route+"/"+work_order_id+"/"+report_id;
                    // window.location.reload()
                }, 3000);
            } else if (data.status == -1) {
                $('#save_device').prop('disabled',false);
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                    //Redirect to login
                    // window.location.href = data.data.route+'/'+customer_id;
                }, 1000);
            } else {
                $('#save_device').prop('disabled',false);
                toastr.error(data.msg);
            }
            },
        error:function(reject){
            console.log(reject)
            let error =reject.responseJSON;
            $.each(error.errors ,function(k,v){
            toastr.error('<h5>'+v+'</h5>');
            return;
            });
            // console.log(error.errors);updateServiceLoc_btn
        }
        
        });

});

//update device
//cancel_capture
$(document).on('click','#save_device1',function(){
    if (update_devices.valid() !== true) {
        
        toastr.error(proceed_err);
        return false;
    }
    var trap_id = $("input[name='trap_condition']:checked").val();
    var bait_condition = $("input[name='bait_condition']:checked").val();
    var evidence = $("input[name='evidence']:checked").val();
    var material = $("input[name='material']:checked").val();
   // var note = $("input[name='material']:checked").val();

   var work_order_id = $('#work_order_id').val();
   var report_id = $('#report_id').val();
   $('#save_device1').prop('disabled',true);
    let formData =new FormData($("#update_device")[0]);
    formData.append('trap_cond',trap_id);
    formData.append('bait_condition',bait_condition)
    formData.append('evidence',evidence)
    formData.append('material',material)
    formData.append('wor_device_id',wor_device_id)
    
    if(typeof values !== 'undefined'){
    formData.append('quantity',values)
    }
   
    if(typeof valuess !== 'undefined'){
    formData.append('pest',valuess)
    }
    f_action = $("#update_device").attr("action");

    $.ajax({
        type: "POST",
        url: "/update/checked_device",
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
        // beforeSend: function() {
        // show_loader();
        // },
        success: function(data, textStatus, jqXHR) {
           
            if (data.status == 1) {
            
                toastr.success('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                //Redirect to new page
                window.location = data.data.route+"/"+work_order_id+"/"+report_id;
                    // window.location.reload()
                }, 3000);
            } else if (data.status == -1) {
                $('#save_device1').prop('disabled',false);
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                    
                }, 3000);
            } else {
                console.log(data);
                //Error (Form validation failed)
                toastr.error(data.msg);
            }
            },
        error:function(reject){
            console.log(reject)
            let error =reject.responseJSON;
            $.each(error.errors ,function(k,v){
            toastr.error('<h5>'+v+'</h5>');
            return;
            });
            // console.log(error.errors);updateServiceLoc_btn
        }
        
        });

});

// $(document).on('keyup','#device_notes',function(){
//     var words = $('#device_notes').val().split(' ');
//     if(words.length >2000){
//         toastr.error('<h5></h5>'); 
//     }
//     alert(words.length);
// })



