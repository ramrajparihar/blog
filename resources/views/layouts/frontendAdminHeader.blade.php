<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="frontend_asset/images/favicon.png" type="image/icon" sizes="16x16">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="frontend_asset/css/bootstrap.min.css">
    <link rel="stylesheet" href="frontend_asset/css/owl.carousel.min.css">
    <link rel="stylesheet" href="frontend_asset/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="frontend_asset/css/fontawesome.min.css">
    <link rel="stylesheet" href="frontend_asset/css/animate.css">
    <link rel="stylesheet" href="frontend_asset/css/style.css">
    <link href="toastr.css" rel="stylesheet"/>
    <link rel="stylesheet" href="frontend_asset/css/developer.css">
    <link rel="stylesheet" href="frontend_asset/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

    <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
    <title>VIVO Store</title>    
</head>

<header class="topHeader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="{{('/') }}">
                <img src="{{'frontend_asset/images/logo.png'}}" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
<body>
    
@yield('content')  
@yield('footer')