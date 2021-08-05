<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <title>Grey State Pest Control | @yield('title')</title>
        <meta content="Admin Dashboard" name="description" />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="/backend_asset/company/images/favicon.png">
     
        <link href="/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet">
        <link href="/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" rel="stylesheet">
        <link href="/plugins/RWD-Table-Patterns/dist/css/rwd-table.min.css" rel="stylesheet" type="text/css" media="screen">
        <link href="/plugins/fullcalendar/css/fullcalendar.min.css" rel="stylesheet">
        <link href="/backend_asset/company/css/metisMenu.min.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/icons.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/customerStyle.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/custom.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/responsive.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/lightgallery.min.css" rel="stylesheet" type="text/css" />
        <link href="/backend_asset/company/css/developer.css" rel="stylesheet" type="text/css">
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
        @stack('css')
    </head>

    <body>
    @yield('header')
    @yield('content')
    
    <script src="/backend_asset/customer/js/jquery.min.js"></script>
        <script src="/backend_asset/customer/js/bootstrap.bundle.min.js"></script>
        <script src="/backend_asset/customer/js/jquery.slimscroll.js"></script>
        <script src="/backend_asset/customer/js/waves.min.js"></script>
        <!-- Jquery-Ui -->
        <script src="/plugins/jquery-ui/jquery-ui.min.js"></script>
        <script src="/plugins/moment/moment.js"></script>
        <script src='/plugins/fullcalendar/js/fullcalendar.min.js'></script>
        <script src="/backend_asset/customer/pages/calendar-init.js"></script>
        <!-- App js -->
        <script src="/backend_asset/customer/js/app.js"></script>
        <script src="/backend_asset/company/js/lightbox.init.js"></script>
        <script src="/backend_asset/company/js/lightgallery.min.js"></script>
        <script>

        $(document).ready(function(){
            $('.navbar-toggle').click(function(){
                $('.menuDesktop').slideToggle();
            })
            let select_loccation=$('#select_location :selected').val();
            let customer_id = $('#customer_id').val();
            let sheduled = "/customer/sheduled/"+select_loccation;
            $('#header_service_report').attr('href',sheduled);

            //corrective action
            let corr_act = "/customer/corrective/action/"+select_loccation;
            $('#header_cor_action').attr('href',corr_act);

            //Trends and Analysis
            let trends = "/cust_trends/"+select_loccation;
            $('#trends_analysis').attr('href',trends);

            //Customer message 
            let messages = "/customer/messages/"+select_loccation;
            $('#customer_message').attr('href',messages);

            //Customer message 
            let map_list = "/customer/map_list/"+select_loccation;
            $('#map_device').attr('href',map_list);

            $('.zoom-image').lightGallery({
                thumbnail:true,
                download: false
            });
        });

        $('#clickimage').click(function(){
            $('.newclass').toggle()
        })

        $('#select_location').change(function(){
            // getDashboardData()
            let location_text =$('#select_location :selected').text();
            
            $('#location_text').text(location_text);
            let location = $('#select_location :selected').val();
            // changeRoute();
        
            getMessageCount();

        })
 
 
    getMessageCount()
  function getMessageCount(){
    location_id = $('#select_location :selected').val();
    $.ajax({
        url: "/customer/MessageCount/"+location_id,
        
    }).done(function(data) {
        
        if(parseInt(data) > 0){
            $('.msgNmbr' ).show();
            $('.msgNmbr' ).text(data);

        }else{
            $('.msgNmbr' ).hide();
        }
       
    });

}
        </script>
        @stack('script')
        
    </body>
</html>   