<header id="topnav">
            <div class="topbar-main">
                <div class="container-fluid">
                    <!-- Logo container-->
                    <div class="logo">                        
                        <a href="/customerDashboard" class="logo">
                            <img src="/backend_asset/company/images/logo-light.png" alt="" class="logo-large">
                        </a>
                    </div>
                    @inject('service', 'App\Http\Services\ChatService')
                    <?php 
                    
                    //$message_count=$service->getCustomerChatCount($selected_loc->location_id)
                    ?>
                   
                    <!-- End Logo container-->
                    <div class="menu-extras topbar-custom">
                        <ul class="navbar-right list-inline float-right mb-0"> 
                            <!--menu  desktop-->
                            <li class="menuDesktop list-inline-item">
                                <ul id="header_tab">
                                    <li class="has-submenu active"><a href="/customerDashboard">Dashboard</a></li>
                                    <!-- <li class="has-submenu msgCount" ><a href="#" id="customer_message">Messages</a>
                                     
                                        <span class="msgNmbr"> </span>
                                      
                                     
                                    </li> -->
                                    <li><a href="#" id="header_service_report">Service Reports</a></li>
                                    <li><a href="#" id="trends_analysis">Trends & Analysis</a></li>
                                    <li><a href="#" id="header_cor_action">Corrective Action Log</a></li>
                                    <li><a href="#" id="map_device">Activity Map</a></li>
                                </ul>
                            </li> 
                            <!-- language-->
                            <li class="dropdown notification-list list-inline-item d-md-inline-block ">
                            <select class="form-control select2 nav-link dropdown-toggle arrow-none locationSearch mt-3" id="select_location">
                            @isset($selected_loc)
                            <option class="dropdown-item" value="{{$selected_loc->location_id}}">{{$selected_loc->location_name}}</option>
                            @endisset
                                    @foreach($customer_locs as $location)            
                                    
                                    <option class="dropdown-item" value="{{$location->location_id}}">{{$location->location_name}}</option>
                                  @endforeach
                                </select>
                                <!-- <a class="nav-link dropdown-toggle arrow-none locationSearch mt-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">Select Location <span class="mdi mdi-chevron-down"></span></a>
                                
                                <div class="location_dropdown dropdown-menu dropdown-menu-right language-switch">
                                    <a class="dropdown-item" href="#"><span> Cruxdale </span></a>
                                    <a class="dropdown-item" href="#"><span> Stoneham Hills </span></a>
                                    <a class="dropdown-item" href="#"><span> Julmouth </span></a>
                                    <a class="dropdown-item" href="#"><span> Sandville </span></a>
                                    <a class="dropdown-item" href="#"><span> Cruxdale </span></a>
                                </div> -->
                            </li>
                            <!-- notification -->
                            <li class="dropdown notification-list list-inline-item" >
                                <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="mdi mdi-bell-outline noti-icon " id="all_notification"></i>
                                    <span class="badge badge-pill badge-danger noti-icon-badge" id="notification_count">0</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg cust_noti_show">
                                    <!-- item-->
                                    <h6 class="dropdown-item-text noti-list-count">
                                            Notifications ()
                                    </h6>
                                    <div class="slimscroll notification-item-list list_all_noti">
                                        <!-- item-->
                                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                            <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                            <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                        </a> -->
                                        <!-- item-->
                                       
                                    </div>
                                    <!-- All-->
                                    <a href="javascript:void(0);" class="dropdown-item text-center text-primary" id="load_more">
                                            Load More <i class="fi-arrow-right"></i>
                                        </a>
                                </div>
                            </li>
                            <li class="dropdown notification-list list-inline-item">
                                <div class="dropdown notification-list nav-pro-img">
                               
                                    <a class="dropdown-toggle nav-link arrow-none nav-user" id="clickimage" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    @if(Auth::user()->image_name)
                                   
                                    <img src="{{asset( 'uploads/customer_profiles/'.Auth::user()->image_name )}}" alt="user" onerror=this.src="/frontend_asset/images/favicon.png" class="rounded-circle">
                                    @else
                                        <img src="/frontend_asset/images/favicon.png" alt="user" class="rounded-circle">
                                    @endif
                                    </a>
                                    <div class="dropdown-menu newclass dropdown-menu-right profile-dropdown ">
                                        <!-- item-->
                                        <a class="dropdown-item" href="{{ route('customer.profile') }}"><i class="mdi mdi-account-circle m-r-5"></i> Profile</a>
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
        </header>