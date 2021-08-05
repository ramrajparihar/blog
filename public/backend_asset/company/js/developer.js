function show_loader() {
    $("#gs_front_loader").show();
}

function hide_loader() {
$("#gs_front_loader").hide();
}



var proceed_err = "<h5>Please fill required fields before proceeding.</h5>",
    err_unknown = "Something went wrong. Please try again.";
    

//toastr configurations
toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "3000",
    hideDuration: "1000",
    timeOut: "3000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
    };


//$(".delete_route").click(function(){    
    $(document).on('click','.delete_route',function(){

     route_id = this.id;
        
        bootbox.confirm({
            message: "Do you want to delete this route ?",
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
                        url: "deleteRoute/"+route_id, 
                        success: function(data){
                            if (data.status == 1) {
                                toastr.success('<h5>'+data.msg+'</h5>');
                            }
                            if (data.status == -1) {
                                toastr.error('<h5>'+data.msg+'</h5>');
                            }
                            window.setTimeout(function() {
                                //Redirect to new page
                                 window.location = "/route";
                            }, 3000);
                        }
                    });
                }
            }
            });

}); 

//delete location type
//$(".delete_location").click(function(){    
$(document).on('click','.delete_location',function(){
  
    loc_id = this.id;
    
    bootbox.confirm({
        message: "Do you want to delete this location ?",
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
                url: "deleteLocation/"+loc_id, 
                success: function(data){
                    if (data.status == 1) {
                        toastr.success('<h5>'+data.msg+'</h5>');
                    }
                    if(data.status == -1){
                        toastr.error('<h5>'+data.msg+'</h5>');
                    }
                    window.setTimeout(function() {
                        //Redirect to new page
                            window.location = "/locationType";
                    }, 3000);
                }
            });
            }
        }
        });
}); 

  //validate location type
  var Loc_submitForm = $("#Loc_submitForm");
  Loc_submitForm.validate({
      
    rules: {
        location_type: {
            required: true,
            minlength:2
          },
        },
    messages: {
        location_type: {
            required: "Location type name is a required field." ,
           // minlenght:"Please enter at least 2 characters."
          },
    }
  });

  //validate route type
  var submit_route_form = $("#submitForm");
  submit_route_form.validate({
      
    rules: {
        route_name: {
            required: true,
            minlength:2
          },
        },
    messages: {
        route_name: {
            required: "Route name is a required field." 
          },
    }
  });

  $("body").on("click", "#submit_route", function(event) {

    if (submit_route_form.valid() !== true) {
        toastr.error(proceed_err);
        return false;
        }
        $('#submit_route').prop('disabled',true);   
    var _that = $(this),
    form = _that.closest("form"),
    formData = new FormData(form[0]),
    f_action = $(form).attr("action");
    
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
                 window.location = data.data.route;
                }, 3000);
            } else if (data.status == -1) {
                $('#submit_route').prop('disabled',false);   
                //Session expired
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                  
                }, 1000);
            } else {
                $('#submit_route').prop('disabled',false);   
              console.log(data);
               
                toastr.error(data.msg);
            }
        }
        
    });
});


//add location type
$("body").on("click", "#submit", function(event) {

    if (Loc_submitForm.valid() !== true) {
    toastr.error(proceed_err);
    return false;
    }
    
    $('#submit').prop('disabled',true);
    var _that = $(this),
    form = _that.closest("form"),
    formData = new FormData(form[0]),
    f_action = $(form).attr("action");
    
    
   // return false;
    $.ajax({
        type: "POST",
        url: f_action,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
    //     beforeSend: function() {
    //    // show_loader();
    //     },
        success: function(data, textStatus, jqXHR) {
           // hide_loader();
          
            if (data.status == 1) {
                //Success
              
                toastr.success('<h5>'+data.msg+'</h5>');
                //let dataset = {email:data.data.email,password:data.data.password};
               //let val =JSON.stringify(dataset);
               // window.location = "/companyLogin";
                window.setTimeout(function() {
                 

                //Redirect to new page
                 window.location = data.data.route;
                }, 3000);
            
            } else if (data.status == -1) {
                $('#submit').prop('disabled',false);
                //Session expired
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                    //Redirect to login
                    //window.location.href = data.url;
                }, 1000);
            } else {
                $('#submit').prop('disabled',false);
              
                //Error (Form validation failed)
                toastr.error(data.msg);
            }
    
        }
        
    });
});

//excecute every second to get notification
var interval;
// function callAjax() {
//   $.ajax({
//                 type: 'GET',
//                 url: '/company/reminder',
//                 data: $(this).serialize(),
//                 dataType: 'json',
//                 success: function (data) {
//                    // console.log(data);
//                    var noti_count = data.length;
//                     if(noti_count > 0){
//                         $('#notification_count').show();
//                         $('#notification_count').text(noti_count);// first set the value 
                       
//                         interval = setTimeout(callAjax, 2000);  
//                     }
//                     else{
//                         $('#notification_count').hide();// first set the value 
//                         interval = setTimeout(callAjax, 2000);  
//                     } 
//                 }
//         });
// }
// callAjax();

//show all notification
// $(document).on('click','.clickimg',function(){
   
//     $.ajax({
//         type: 'GET',
//         url: '/company/all/notification',
//         data: $(this).serialize(),
//         dataType: 'json',
//         success: function (data) {
//            // console.log(data);
//                 $('#notification_count').text(data.length);// first set the value 
//                 interval = setTimeout(callAjax, 2000);   
//         }
// });
// })

//list all notification
$('.clickimg').click(function(){
    
    $.ajax({
        type: 'GET',
        url: '/list/notification',
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
           let message = data[0];
           
           let unread_message= data[1];

            
            if( unread_message >0 ){
                $('.noti-list-count').text('Notifications ('+unread_message+')')
            }
            
            $('.notification-item-list').empty();
            message.forEach(function(list){
                
                if("reminder_date" in list){
                    $('.notification-item-list').append(` <a href="javascript:void(0);" class="dropdown-item notify-item active">
                    <div class="notify-icon bg-success"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                    <p class="notify-details">`+list.title+`<span class="text-muted">`+list.description+`</span></p>
                </a>`) 
                }else{
                    $('.notification-item-list').append(` <a href="javascript:void(0);" class="dropdown-item notify-item active">
                    <div class="notify-icon bg-success"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                    <p class="notify-details">`+list.title+`<span class="text-muted">`+list.body+`</span></p>
                </a>`) 
                }
               
            })

            if(data.length < 100){
                $('#load_more').text('');
            }
           
        }
    });
})

// function getDesktopNotification() {
//     $.ajax({
//                   type: 'GET',
//                   url: '/company/msg/notification',
//                   data: $(this).serialize(),
//                   dataType: 'json',
//                   success: function (data) {
                     
//                      var mes_count = data.length;
//                       if(mes_count > 0){
//                         $.each(data,function(i, val){
//                             console.log(val)
//                             let body = val['body'];
//                             let title = val['title']
//                             let msgType = val['type']
//                             let location_id = data[0]['location_id'];
//                             //show notification bar
//                             notifyMe(title,body,location_id,msgType)

//                             //make notification as read
//                             makeMsgAsRead()

//                         })
                        
                         
//                           interval = setTimeout(getDesktopNotification, 2000);  
//                       }
//                       else{
                        
//                           interval = setTimeout(getDesktopNotification, 2000);  
//                       } 
//                   }
//           });
//   }
//   getDesktopNotification();

  function notifyMe(title,message,location_id,msgType=null) {
     
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(title,{
        body: message,  
        //icon:'/frontend_asset/images/favicon.png',
        badge:'/frontend_asset/images/favicon.png'
      });

      notification.onclick  = function(event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
       
        if(msgType == "pestSighting"){

        }else{
            window.location ='/messages/'+location_id;
        }
        
        notification.close();
      }
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!",{
            body: 'Welcome to greystate pest solution', 
          });
        }
      });
      
      // open message window and close currently notification
      notification.onclick  = function(event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.location ='/messages/'+location_id;
        notification.close();
      }

     
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }

//   function makeMsgAsRead(){
//     $.ajax({
//         url: "/makeMsgNotificationAsRead", 
//         success: function(data){
//             // if (data.status == 1) {
//             //     toastr.success('<h5>'+data.msg+'</h5>');
//             // }
//             // if (data.status == -1) {
//             //     toastr.error('<h5>'+data.msg+'</h5>');
//             // }
           
//         }
//     });
//   }


//hide other popup model
$(document).mouseup(function(e){
    var container = $(".profile-dropdown");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});

$('.clickimg').click(function(){
    event.stopPropagation()
    $("#dropdown_menu").show();
})
$(document).mouseup(function(e){
    event.stopPropagation()
    var container = $("#dropdown_menu");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});

//Show admin profile and logout option
$('.clicadminkimg').click(function(){
    // console.log('jiiis');
     $(".show_amin_user").show();
 })


$(document).ready(function(){
    loadMore = 10;

    $('.zoom-image').lightGallery({
        thumbnail:true,
        download: false
      });
})

// messageNotification(1);
// function messageNotification(pages){

   
//     pages = pages;
//     $.ajax({
//         type: 'GET',
//         url: '/company/unreadMsgCount',
//         dataType: 'json',
//         success: function (data) {
           
//             var mes_count = data;
//             if(mes_count > 9){
//                 mes_count = '9+'
//             }
            
//             if(mes_count < 1){
//                 $('#message_count').hide();
//             }else{
//                 $('#message_count').show();
//                 $('#message_count').text(mes_count);
//             }

//             interval = setTimeout(messageNotification, 5000);   
//         }
//     })

// }

page = 0; 

$(document).on('click','#countmsg',function(event){
    event.stopPropagation()
   
    $('.noti-msg-list').html('');
    $('#dropdownmenu').show();
    $('#dropdown_menu').hide();
   
    
    load_more_msg(0)
});

$(document).on('click','#message_count',function(event){
   event.stopPropagation()
  
    $('.noti-msg-list').html('');
    $('#dropdownmenu').show();
    $('#dropdown_menu').hide();
   
    
    load_more_msg(0)
});

$(document).on('click','#load_more_msg',function(event){
    event.stopPropagation()


    page++;
    load_more_msg(page)
  
})

function load_more_msg(page){
    $.ajax({
        type: 'GET',
        url: '/company/load_more_msg/'+page,
        dataType: 'json',
        success: function (data) {
            
          if(data.length == 0){
            $('#message_count').hide();
          }

          if(data.length < 10){
              $('#load_more_msg').hide()
          }else{
            $('#load_more_msg').show()  
          }
           let read = '';
            data.forEach(function(list){
                if(list.is_read ==1){
                    read = 'read'
                }

                let listMsg = list.body;
                if((list.body).length > 20){
                   var newstring = listMsg.slice(0, 30);
                   newstring = newstring+'...';
                }else{
                  var  newstring =list.body;
                }

                $('.noti-msg-list').append(` <a href="/messages/${list.location_id}" class="dropdown-item notify-item active ${read} ">
                <div class="notify-icon bg-success"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                <p class="notify-details" >${list.title}<span class="text-muted">${newstring}</span></p>
            </a>`) 
            })
           
        }
    });
}


// //hide other popup model
$(document).mouseup(function(e){
    event.stopPropagation()
    var container = $("#dropdownmenu");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
});
