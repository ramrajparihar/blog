<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <link rel="icon" href="{{asset('frontend_asset/img/favicon.ico')}}" type="image/icon" sizes="16x16">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{asset('frontend_asset/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_asset/css/responsive.css')}}">
    <link href="toastr.css" rel="stylesheet"/>
    <link rel="stylesheet" href="{{asset('frontend_asset/css/developer.css')}}">
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
    <title>Grey State Pest Solutions @yield('title')</title>    
</head>

<header class="topHeader">
    <nav class="navbar navbar-expand-lg navbar-light pestHeader">
        <div class="container">
            <a class="navbar-brand" href="{{('/') }}">
                <img src="{{asset('frontend_asset/img/logo.png')}}" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="{{('/') }}">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about-section">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services-section">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-underline" href="{{ route('company.login') }}">Company Login </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-underline" href="{{ route('tech.login') }}">Technician Login </a>
                    </li>
                    <li class="nav-item btnMenuLink resMarBtm">
                       
                        <a href="{{ route('customer.login') }}" class="btn btn-custom btn-custom.theme-color btnSlider regBtn">Customer Portal</a>
                    </li>      
                </ul>
            </div>
        </div>
    </nav>
</header>
<body>
    
@yield('content')  
@yield('footer')