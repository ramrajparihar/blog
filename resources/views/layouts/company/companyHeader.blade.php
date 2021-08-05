<!-- <style>
    .notification-item-list {
    max-height: 500px;
    height: auto !important;
} -->
</style>
    <div id="wrapper">
            <!-- Top Bar Start -->
            <div class="topbar">
                <!-- LOGO -->
                <div class="topbar-left">
                    <a href="/companyHome" class="logo">
                        <span>
                            <img src="/backend_asset/company/images/logo-light.png" alt="">
                        </span>
                        <i>
                            <img src="/backend_asset/company/images/logo-sm.png" alt="" height="22">
                        </i>
                    </a>
                </div>
                <nav class="navbar-custom">
                    <ul class="navbar-right list-inline float-right mb-0">

                    <li class="dropdown notification-list list-inline-item all_messages">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" >
                            
                            <i class="far fa-envelope fa-1x" style="font-size: 20px;" id="countmsg"></i>
                              
                                <span class="badge badge-pill badge-danger noti-icon-badge" id="message_count">0</span>
                             
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="dropdownmenu">
                                <!-- item-->
                                <h6 class="dropdown-item-text noti-list-count">
                                        Messages
                                </h6>
                                <div class="slimscroll notification-item-list noti-msg-list">
                                    <!-- item-->
                                    <!-- <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                        <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                        <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                    </a> -->
                                    <!-- item-->
                                   
                                </div>
                                <!-- All-->
                                <a href="#" class="dropdown-item text-center text-primary" id="load_more_msg" >
                                       Load More <i class="fi-arrow-right"></i>
                                    </a>
                            </div>
                        </li>

                        <!-- notification -->
                       
                        <li class="dropdown notification-list list-inline-item all_notification">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="mdi mdi-bell-outline noti-icon clickimg"></i>
                              
                                <span class="badge badge-pill badge-danger noti-icon-badge clickimg" id="notification_count">0</span>
                             
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="dropdown_menu">
                                <!-- item-->
                                <h6 class="dropdown-item-text noti-list-count">
                                        Notifications
                                </h6>
                                <div class="slimscroll notification-item-list">
                                    <!-- item-->
                                    <!-- <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                        <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                        <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                    </a> -->
                                    <!-- item-->
                                   
                                </div>
                                <!-- All-->
                                <a href="#" class="dropdown-item text-center text-primary" id="load_more" >
                                       Load More <i class="fi-arrow-right"></i>
                                    </a>
                            </div>
                        </li>
                       
                        <li class="dropdown notification-list list-inline-item">
                            <div class="dropdown notification-list nav-pro-img">
                                <a class="dropdown-toggle nav-link arrow-none waves-effect nav-user togle_user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <!-- <img src="backend_asset/company/images/users/user-4.jpg" alt="user" class="rounded-circle"> -->
                                    @if(Auth::guard('company')->check())
                                    <img src="/uploads/company_profile/thumb/{{session()->get('company_logo')}}" alt="user" onerror=this.src="/frontend_asset/images/favicon.png" class="rounded-circle">
                                     @else
                                     <img src="/frontend_asset/images/favicon.png" alt="user" onerror=this.src="/frontend_asset/images/favicon.png" class="rounded-circle">
                                     @endif
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                                    <!-- item-->
                                    @if(Auth::guard('company')->check())
                                    <a class="dropdown-item" href="/companyProfile"><i class="mdi mdi-account-circle m-r-5"></i> Profile</a>
                                    @else
                                    <a class="dropdown-item" href="/techProfile"><i class="mdi mdi-account-circle m-r-5"></i> Profile</a>
                                    @endif
                                    <!-- <a class="dropdown-item" href="#"><i class="mdi mdi-wallet m-r-5"></i> My Wallet</a>
                                    <a class="dropdown-item"><span class="badge badge-success float-right">11</span><i class="mdi mdi-settings m-r-5"></i> Settings -->
                                        <!-- <select id="myList" onchange="location = this.value;">
                                            <option></option>
                                            <option value="/reminder"><a href="/reminder">Notifications</a></option>
                                            <option value="/customMessage">Messages</option>
                                        </select> -->
                                        </a>
                                    <!-- <a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a> -->
                                    <div class="dropdown-divider"></div>
                                    @if(Auth::guard('company')->check())
                                    <a class="dropdown-item text-danger" href="/companyLogout"><i class="mdi mdi-power text-danger"></i> Logout</a>
                                    @else
                                    <a class="dropdown-item text-danger" href="/techLogout"><i class="mdi mdi-power text-danger"></i> Logout</a>
                                    @endif
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="list-inline menu-left mb-0">
                        <li class="float-left">
                            <button class="button-menu-mobile open-left waves-effect">
                                <i class="mdi mdi-menu"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>