<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
    <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <title>Grey State Pest Control</title>
        <meta content="Admin Dashboard" name="description" />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="/backend_asset/customer/images/favicon.png">
        <!--calendar css-->
        <link href="/plugins/fullcalendar/css/fullcalendar.min.css" rel="stylesheet">
        <link href="/backend_asset/customer/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/icons.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/customerStyle.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/custom.css" rel="stylesheet" type="text/css">
        <link href="/backend_asset/customer/css/responsive.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    </head>

    <body>
    @yield('header')
    @yield('content')   
    </body>

</html>    