@extends('layouts.admin.main')
@section('adminHeader')
@include('layouts.admin.adminHeader')
@endsection
@section('title','| Admin Dashboard')

@section('adminSidebar')
@include('layouts.admin.adminSidebar')
@endsection

@section('content')
   
           
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">                                
                                <div class="col-sm-12">
                                    <h4 class="page-title">Dashboard</h4>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active">Welcome to VIVO Store</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            <div class="float-left mini-stat-img mr-4">
                                                <img src="backend_asset/company/images/services-icon/05.png" alt="" >
                                            </div>
                                            <h5 class="font-16 text-uppercase mt-0 text-white-50">Product</h5>
                                            <h4 class="font-500">#34 <i class="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-right">
                                                <a href="/allCompany" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>        
                                            <p class="text-white-50 mb-0">View Detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div class="col-xl-4 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            <div class="float-left mini-stat-img mr-4">
                                                <img src="backend_asset/company/images/services-icon/06.png" alt="" >
                                            </div>
                                            <h5 class="font-16 text-uppercase mt-0 text-white-50">Users</h5>
                                            <h4 class="font-500">15.8 <i class="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-right">
                                                <a href="technician.html" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>        
                                            <p class="text-white-50 mb-0">View Detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            <div class="float-left mini-stat-img mr-4">
                                                <img src="backend_asset/company/images/services-icon/07.png" alt="" >
                                            </div>
                                            <h5 class="font-16 text-uppercase mt-0 text-white-50">Orders</h5>
                                            <h4 class="font-500">758 <i class="mdi mdi-arrow-down text-danger ml-2"></i></h4>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-right">
                                                <a href="materialUse.html" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>        
                                            <p class="text-white-50 mb-0">View Detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card mini-stat bg-primary text-white">
                                    <div class="card-body">
                                        <div class="mb-4">
                                            <div class="float-left mini-stat-img mr-4">
                                                <img src="backend_asset/company/images/services-icon/08.png" alt="" >
                                            </div>
                                            <h5 class="font-16 text-uppercase mt-0 text-white-50">Payment</h5>
                                            <h4 class="font-500">14,745 <i class="mdi mdi-arrow-down text-danger ml-2"></i></h4>
                                        </div>
                                        <div class="pt-2">
                                            <div class="float-right">
                                                <a href="trends.html" class="text-white-50"><i class="mdi mdi-arrow-right h5"></i></a>
                                            </div>        
                                            <p class="text-white-50 mb-0">View Detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- container-fluid -->
                </div>
                <!-- content -->
                @include('layouts.admin.adminFooter')
            </div>
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
        </div>
     @endsection  