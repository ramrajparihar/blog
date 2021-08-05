<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <link rel="icon" href="/frontend_asset/images/favicon.png" type="image/icon" sizes="16x16">
        <title>VIVO Store @yield('title')</title>
        <meta content="Admin Dashboard" name="description" />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="backend_asset/images/favicon.png">
        <!-- Table css -->
        <link href="/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" rel="stylesheet">
        <link href="/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" rel="stylesheet">
        <link href="/plugins/fullcalendar/css/fullcalendar.min.css" rel="stylesheet">
        <link href="/plugins/RWD-Table-Patterns/dist/css/rwd-table.min.css" rel="stylesheet" type="text/css" media="screen">
        <!-- <link href="/plugins/bootstrap-touchspin/css/jquery.bootstrap-touchspin.min.css" rel="stylesheet" />  -->
        <link href="/backend_asset/company/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" /> -->
        <link href="/backend_asset/company/css/metisMenu.min.css" rel="stylesheet" type="text/css">
        <link href="/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
        <link href="/backend_asset/company/css/magnific-popup.css" rel="stylesheet" type="text/css" />
        <link href="/backend_asset/company/css/lightgallery.min.css" rel="stylesheet" type="text/css" />
        <!-- <link href="/toastr.css" rel="stylesheet"/> -->
        <link href="/backend_asset/company/css/icons.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/style.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/custom.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/company/css/developer.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
        <link href="/backend_asset/company/css/lightgallery.min.css" rel="stylesheet" type="text/css" />

  </head>
  <body>
  @yield('adminHeader')
  
  @yield('adminSidebar') 
  @yield('content')
  
  </body>
  


</html>