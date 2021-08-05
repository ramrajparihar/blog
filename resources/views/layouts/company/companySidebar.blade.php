<div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    <li>
                        <a href="/companyHome" class="waves-effect">
                            <i class="ti-home"></i><span> Dashboard </span>
                        </a>
                    </li>
                    @if(Auth::guard('company')->check())
                    <li>
                        <a href="/calendar" class="waves-effect"><i class="ti-calendar"></i><span> Calendar</a>
                    </li>
                    @endif
                    <li>
                        <a href="/customer" class="waves-effect"><i class="ti-user"></i><span> Customers</a>
                    </li>
                    
                    <!-- <li>
                        <a href="/company" class="waves-effect mm-active"><i class="ti-user"></i><span> Company</a>
                    </li>
                    -->
                    @if(Auth::guard('company')->check())
                    <li>
                        <a href="/user" class="waves-effect"><i class="ti-user"></i><span> Users</a>
                    </li>
                    
                    <li>
                        <a href="/workOrder" class="waves-effect"><i class="ti-briefcase"></i><span> Work Order</a>
                    </li>  
                   
                    <li>
                        <a href="/all/material/use" class="waves-effect"><i class="ti-folder"></i><span> Material Use List</a>
                    </li>
                   
                    <li>
                        <a href="/trends" class="waves-effect"><i class="ti-bar-chart"></i><span> Trends</a>
                    </li>
                    <li>
                        <a href="#" class="waves-effect"><i class="ti-layers-alt"></i><span> Pest & Material Settings <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                        <ul class="submenu">
                            <li><a href="/material">Materials</a></li>
                            <li><a href="/pest"> Pest Type</a></li>
                            <li><a href="/appMethod">Application Methods</a></li>
                            <li><a href="/appDevice">Application Devices</a></li>
                            <li><a href="/dilutionRate">Dilution Rates</a></li>
                            <li><a href="/recommendation">Recommendations</a></li>
                            <li><a href="/condition">Conditions</a></li>
                            <li><a href="/measure">Unit Of Measure</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="waves-effect"><i class="ti-package"></i><span> Device & Trap Settings <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                        <ul class="submenu">
                            <li><a href="/deviceType">Device Type</a></li>
                            <li><a href="/trapCond">Trap Condition</a></li>
                            <li><a href="/baitCond">Material Condition</a></li>
                            <li><a href="/evidence">Evidences</a></li>
                            <li><a href="/deviceArea">Device Area</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="waves-effect"><i class="ti-settings"></i><span> Settings <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                        <ul class="submenu">
                            <li><a href="/locationType">Location Types</a></li>
                            <li><a href="/route">Route</a></li>
                            <li><a href="/correctiveAction">Corrective Actions</a></li>
                            <li><a href="/sanitation">Sanitation</a></li>
                            <li><a href="/ipmPractice">IPM Practices</a></li>
                            <li><a href="/reminder">Reminder</a></li>
                            <li><a href="/customMessage">Custom Message</a></li>
                            <li><a href="/mapColorGuidelines">Map Color Guidelines</a></li>
                           
                        </ul>
                    </li> 
                    @endif                          
                </ul>
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>
        </div>
        <!-- Sidebar -left -->
</div>