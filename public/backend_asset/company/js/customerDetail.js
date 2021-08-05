$(document).on('click','.show_site_contact',function(){

    let values = $(this).attr('value');
    $('#addSidecontact').modal('show');
    let url = '/getSiteContact/'+values;
    $.get(url,function(data){
      
        $('#site_cntc_name').text(data.site_contact_name)
        let phone = "(+"+data.site_contact_country_code+") "+data.site_contact_phoneNo;
        if(data.site_contact_phoneNo == null){
            phone = null;
        }
        $('#site_cntc_phone').text(phone);
        $('#site_cntc_email').text(data.site_contact_email)
    })
   
})

function setSiteContact(location_id){
   // let values = $(this).attr('href');
  //  $('#addSidecontact').modal('show');
  console.log('giii');
  console.log(location_id);
    let url = '/getSiteContact/'+location_id;
    $.get(url,function(data){
      
         $('#edit_site_name').val(data.site_contact_name)
        // var input3 = document.querySelector("#phone3");
        // window.intlTelInput(input3, {
        // utilsScript: "/public/build/js/utils.js",
        // }); 

        let phone ="+"+data.site_contact_country_code+data.site_contact_phoneNo;
        console.log(phone);
        $('#phone3').val(phone);
        var input3 = document.querySelector("#phone3");
        window.intlTelInput(input3, {
        utilsScript: "/public/build/js/utils.js",
        }); 
        $('#phone3').val(data.site_contact_phoneNo);
        $('#edit_site_email').val(data.site_contact_email)

    })
}

$(".print_device").click(function(){
    var checkval= $('.myTable:checkbox:checked').map(function() {
        return this.value;
    }).get();

 if(checkval.length == 0){
     toastr.error('Please select atleast one device');
     return false;
 }
   // print_all_device
    window.location = "/print_device/"+checkval;
})
$(".print_all_device").click(function(){
    // var checkval= $('.myTable:checkbox:checked').map(function() {
    //     return this.value;
    // }).get();
    customer_id = $('#customer_id').val();
   
    var locations = $('#select_location option:selected').val();
    //alert(locations);
   // print_all_device
    window.location = "/print_all_device/"+customer_id+'/'+locations; 
})

$(document).on('click','.createReport',function(event){
console.log('jo');
    event.preventDefault();
    let href = $(this).attr('href');
    var self = $(this);

    $.ajax({
        url:href,
        success:function(data)
        {
            console.log(data);
            if(data.status ==1 ){
            toastr.success("<h5>"+data.msg +"</h5>");
           let url ="/reportDetail/"+data.data.wo_id+"/"+data.data.report_id;
            self.attr('href',url);
            self.text('View Report');
            self.removeClass('createReport');
            }
            if(data.status == -1){
                toastr.error("<h5>"+data.msg +"</h5>");
                return false;
            }
           // $(this).replaceWith(`<a class="dropdown-item createReport" href="/createReport/`+data.data.wo_id+`/`+data.data.report_id+`">Create Report</a>`)
        }
    });

})


$(document).on('click',".delete_report",function(event){

    event.preventDefault();

    let report_id = $(this).attr('value');
    var url = $(this).attr('href');
    var current_tr = $(this).closest('tr');
    console.log(report_id);
    bootbox.confirm({
       message: "Do you want to delete this work report ?",
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
               url: url, 
               success: function(data){
              
                   if (data.status == 1) {
                        current_tr.fadeOut(1000,function(){
                            current_tr.remove();
                        });
                       
                        window.setTimeout(function() {

                        }, 3000);

                        toastr.success('<h4>'+data.msg+'</h4>');
                   
                   }
                   if(data.status == -1){
                    toastr.error(data.msg);
                   }
                //    window.setTimeout(function() {
                //        //Redirect to new page
                //           // window.location = "/appDevice";
                //    }, 3000);
               }
           });
           }
       }
       });

});
//Resend Email to site contact
$(document).on('click','.resend_mail',function(event){
    
        event.preventDefault();
        let  sitecontact_id = $(this).attr('value');
       
    
        $.ajax({
            url:"/resend_mail?site_contact_id="+sitecontact_id,
            success:function(data)
            {
                
                if(data.status ==1 ){
                toastr.success("<h5>"+data.msg +"</h5>");
            
                }
                if(data.status == -1){
                    toastr.error("<h5>"+data.msg +"</h5>");
                    return false;
                }
               
            }
        });
    
    })

    $(document).on('click','.deleteMapGuide',function(e){
  
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
                            //Redirect to new page
                                //window.location = "/baitCond";
                                location.reload();
                        }, 3000);
                    }
                });
                }
            }
            });
      });


// $(document).on('click','.deleteMap',function(e){
//     e.preventDefault();
//     var location_id = $(this).attr('value');
//     console.log('mappicid',location_id);

//     // $.ajax({
//     //     type: "get", 
//     //     url: '/getAllMap/'+location_id, 
//     //     //data: "tag_id=" + id + "&type=remove",
//     //     success: function(data) {
            
//     //         $('#mapPage').html(data);    
             
//     //     }
//     //  });
// }) 

$(document).on('click','.deleteMap',function(event){
    event.preventDefault();
    
    let  map_pic_id =  $(this).attr('value')
    let url = '/deleteMapImg/'+map_pic_id;
     var currentDiv =$(this).closest('.mapItem');

    bootbox.confirm({
        message: "Do you want to delete this activity map?",
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
                url: url, 
                success: function(data){
                    if (data.status == 1) {
                        currentDiv.fadeOut();
                        toastr.success('<h5>'+data.msg+'</h5>');
                    }
                    if (data.status == -1) {
                        toastr.error('<h5>'+data.msg+'</h5>');
                    }
                    window.setTimeout(function() {
                        //Redirect to new page
                           // location.reload();
                    }, 3000);
                }
            });
            }
        }
    });

    return false;
});

$(document).on('click','.editMap',function(e){
    e.preventDefault();
    var map_pic_id = $(this).attr('value');
    console.log('map_pic_id',map_pic_id);
    let url = "/editMap/?map_pic_id=" + map_pic_id
    //
    console.log(url);
    //return false;
    window.location = "/editMap/" + map_pic_id;
    return false;
   
})   
         

