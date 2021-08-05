<header id="topnav">
            <div class="topbar-main">
                <div class="container-fluid">
                    <!-- Logo container-->
                    <div class="logo">                        
                        <a href="#" class="logo">
                            <img src="/backend_asset/customer/images/logo-light.png" alt="" class="logo-large">
                        </a>
                    </div>
                    <!-- End Logo container-->
                    <div class="menu-extras topbar-custom">
                        <ul class="navbar-right list-inline float-right mb-0"> 
                            <!--menu  desktop-->
                            <li class="menuDesktop list-inline-item">
                                <ul id="header_tab">
                                    <li class="has-submenu active" id="dashboardTab"><a href="/sanitation/dashboard">Dashboard</a></li>
                                    <li class="has-submenu" id="trendsTab"><a href="trendsAnalysis.html">Trends & Analysis</a></li>
                                    <li class="has-submenu" id="actionTab"><a href="correctiveActionLog.html">Corrective Action Log</a></li>
                                    <li class="dropdown has-submenu" id="settingTab">
                                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="">Settings</a>
                                        <div class="dropdown-menu setting" id="settingOption">
                                          <a class="dropdown-item" href="/sanitation/locationArea">Location Area</a>
                                          <a class="dropdown-item" href="/sanitation/locationType">Location Type</a>
                                          <a class="dropdown-item" href="/sanitation/location">Location ID</a>
                                          <a class="dropdown-item" href="/sanitation/group">Shift/Group</a>
                                          <a class="dropdown-item" href="/sanitation/observation">Observations</a>
                                          <a class="dropdown-item" href="/sanitation/finding">Findings</a>
                                          <a class="dropdown-item" href="/sanitation/material">Material Module</a>
                                          <a class="dropdown-item" href="/sanitation/unitofmeasure">Unit Of Measure</a>
                                        </div>
                                    </li>
                                </ul>
                            </li> 
                            <!-- language-->
                            <li class="dropdown notification-list list-inline-item d-none d-md-inline-block ">
                                <select name="select_location" id="select_location" class="nav-link dropdown-toggle arrow-none locationSearch mt-3" data-toggle="dropdown">
                                    @foreach($customer_locs as $location)
                                    <option class="dropdown-item" value="{{$location->location_id}}"><span> {{$location->location_name}} </span></option>
                                   
                                   @endforeach   
                                </select>
                                <!-- <a class="nav-link dropdown-toggle arrow-none locationSearch mt-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">Select Location <span class="mdi mdi-chevron-down"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right language-switch">
                                    <select name="" id="">
                                    <option class="dropdown-item" href="#"><span> Cruxdale </span></option>
                                   
                                    <a class="dropdown-item" href="#"><span> Stoneham Hills </span></a>
                                    <a class="dropdown-item" href="#"><span> Julmouth </span></a>
                                    <a class="dropdown-item" href="#"><span> Sandville </span></a>
                                    <a class="dropdown-item" href="#"><span> Cruxdale </span></a>
                                    </select>
                                   
                                </div> -->
                            </li>
                            <!-- notification -->
                            <li class="dropdown notification-list list-inline-item">
                                <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="mdi mdi-bell-outline noti-icon"></i>
                                    <span class="badge badge-pill badge-danger noti-icon-badge">3</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                    <!-- item-->
                                    <h6 class="dropdown-item-text">
                                            Notifications (258)
                                        </h6>
                                    <div class="slimscroll notification-item-list">
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                            <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                            <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-warning"><i class="mdi mdi-message-text-outline"></i></div>
                                            <p class="notify-details">New Message received<span class="text-muted">You have 87 unread messages</span></p>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-info"><i class="mdi mdi-glass-cocktail"></i></div>
                                            <p class="notify-details">Your item is shipped<span class="text-muted">It is a long established fact that a reader will</span></p>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-primary"><i class="mdi mdi-cart-outline"></i></div>
                                            <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                        </a>
                                        <!-- item-->
                                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                                            <div class="notify-icon bg-danger"><i class="mdi mdi-message-text-outline"></i></div>
                                            <p class="notify-details">New Message received<span class="text-muted">You have 87 unread messages</span></p>
                                        </a>
                                    </div>
                                    <!-- All-->
                                    <a href="javascript:void(0);" class="dropdown-item text-center text-primary">
                                            View all <i class="fi-arrow-right"></i>
                                        </a>
                                </div>
                            </li>
                            <li class="dropdown notification-list list-inline-item">
                                <div class="dropdown notification-list nav-pro-img">
                                    <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="/backend_asset/customer/images/users/user-4.jpg" alt="user" class="rounded-circle">
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                        <!-- item-->
                                        <a class="dropdown-item" href="admin-profile-page.html"><i class="mdi mdi-account-circle m-r-5"></i> Profile</a>
                                        <!-- <a class="dropdown-item d-block" href="#"><i class="mdi mdi-settings m-r-5"></i> Settings</a> -->
                                        <a class="dropdown-item text-danger" href="{{ route('customer.logout') }}"><i class="mdi mdi-power text-danger"></i> Logout</a>
                                    </div>
                                </div>
                            </li>                            
                            <li class="menu-item list-inline-item">
                                <!-- Mobile menu toggle-->
                                <a class="navbar-toggle nav-link">
                                    <div class="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                <!-- End mobile menu toggle-->
                            </li>
                        </ul>
                    </div>
                    <!-- end menu-extras -->
                    <div class="clearfix"></div>
                </div> <!-- end container -->
            </div>
            <!-- end topbar-main -->
            <!-- MENU Start -->
            <div class="navbar-custom desktopMobile">
                <div class="container-fluid">
                    <div id="navigation">
                        <!-- Navigation Menu-->
                        <ul class="navigation-menu">
                            <li class="has-submenu">
                                <a href="index.html"><i class="ti-home"></i>Dashboard</a>
                            </li>
                            <li class="has-submenu">
                                <a href="servicesLocation.html"><i class="ti-package"></i>Services Location</a>
                            </li>
                            <li class="has-submenu">
                                <a href="workOrder.html"><i class="ti-harddrives"></i>Work Order</a>
                            </li>
                            <li class="has-submenu">
                                <a href="devices.html"><i class="ti-archive"></i> Devices</a>
                            </li>
                        </ul>
                        <!-- End navigation menu -->
                    </div> <!-- end #navigation -->
                </div> <!-- end container -->
            </div> <!-- end navbar-custom -->
        </header>