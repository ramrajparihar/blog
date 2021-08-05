@extends('layouts.admin.main')
@section('title',"| Profile")
@section('adminHeader')
@include('layouts.admin.adminHeader')
@endsection

@section('adminSidebar')
@include('layouts.admin.adminSidebar')
@endsection

@section('content')
   
<!-- <div id="gs_front_loader" class="loaderMain">
    <div class="loaderIneer"><div class="loader"></div></div> 
</div> -->
<!-- <div id="wrapper"> -->
        
    <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">                                
                                <div class="col-sm-12">
                                    <h4 class="page-title">Company Profile</h4>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active">Welcome to Grey State Pest Control</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div class="customer-detail admin-profile-section">
                                        <div class="text-center admin-profile" id="image">
                                        @if($company['company_logo'])
                                            <img  src="{{asset( 'uploads/company_profile/'.$company->company_logo)}}" alt="user" onerror=this.src="/frontend_asset/images/favicon.png" id="preview_image" >
                                            @else
                                                <img src="/frontend_asset/images/favicon.png" id="preview_image">
                                            @endif    
                                                <h5>{{ ucfirst($company['company_name']) }}</h5>
                                                <p class="mb-0">{{ $company['company_email'] }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-6 col-xs-12">
                                    <div class="customer-detail admin-profile-section">
                                        <nav>
                                          <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                          
                                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Technicians ( {{count($technicians)}} )</a>
                                            <a class="nav-item nav-link" id="nav-admins-tab" data-toggle="tab" href="#nav-admins" role="tab" aria-controls="nav-home" aria-selected="false">Admins( {{count($admins)}} )</a>
                                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Customers( {{$customer_counts}} )</a>
                                          </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div class="profile-form-detail">
                                                <div class="table-responsive mb-0 tableGrey" id="table_data">
                                                    <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Phone Number</th>
                                                                    <th>License Number</th>
                                                                    
                                                                    <!-- <th>License Image</th> -->
                                                                   
                                                                    <th>Role</th>
                                                                    <th>Service Route</th>
                                                                    <th>Status</th>
                                                                    <th class="minWidthBtn">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            @if(count($technicians) ==0)
                                                            <!-- <tr><td> No data found</td></tr> -->
                                                            @endif
                                                                @foreach($technicians as $user)
                                                                <tr>
                                                                    <th>{{ucfirst($user->user_firstname)}} {{ucfirst($user->user_lastname)}}</th>
                                                                    <td>{{$user->user_email_id}}</td>
                                                                    <td>(+{{$user->user_country_code}}) {{$user->user_contact_number}}</td>
                                                                    <td>{{ $user->user_licence_number ? $user->user_licence_number : 'N/A' }}</td>
                                                                    <td value="{{$user->role_id}}">{{$user->role_name}}</td>
                                                                    <td>{{$user->route_name or 'N/A'}}</td>
                                                                    @if($user->user_status == 1)
                                                                    <td><span class="badge badge-success">Active</span></td>
                                                                    @else
                                                                    <td><span class="badge badge-danger">Inactive</span></td>
                                                                    @endif
                                                                    <td>
                                                                        <div class="dropdown mo-mb-2">
                                                                            <div class="actionDrop">
                                                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    Action
                                                                                </button>
                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a class="dropdown-item" href="{{route('user.edit', $user->user_id)}}">Edit</a>
                                                                                    @if($user->user_status == 1)
                                                                                    <a class="dropdown-item device_status" value="{{$user->user_id}}" href="/user/status">Inactive</a>
                                                                                    @else
                                                                                    <a class="dropdown-item device_status" value="{{$user->user_id}}" href="/user/status">Activate</a>

                                                                                    @endif
                                                                                    <a class="dropdown-item delete_user" value="{{$user->user_id}}" href="/user/delete">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                                
                                                            </tbody>
                                                        </table>
                                                        @if(count($users)==0)
                                                        <span style="text-align: center;">
                                                        <h4 style="color:gray;align:center;">No data found</h4>
                                                        </span>
                                                        @endif
                                                        {{$users->links("pagination::bootstrap-4")}}
                                                    </div>        
                                                </div>
                                            </div>

                                            <!-- Admin Profile -->
                                            <div class="tab-pane fade show" id="nav-admins" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div class="profile-form-detail">
                                                <div class="table-responsive mb-0 tableGrey" id="table_data">
                                                    <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Phone Number</th>
                                                                    <th>License Number</th>
                                                                    
                                                                    <!-- <th>License Image</th> -->
                                                                   
                                                                    <th>Role</th>
                                                                    <th>Service Route</th>
                                                                    <th>Status</th>
                                                                    <th class="minWidthBtn">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            @if(count($admins) ==0)
                                                            <!-- <tr><td> No data found</td></tr> -->
                                                            @endif
                                                                @foreach($admins as $user)
                                                                <tr>
                                                                    <th>{{ucfirst($user->user_firstname)}} {{ucfirst($user->user_lastname)}}</th>
                                                                    <td>{{$user->user_email_id}}</td>
                                                                    <td>(+{{$user->user_country_code}}) {{$user->user_contact_number}}</td>
                                                                    <td>{{ $user->user_licence_number ? $user->user_licence_number : 'N/A' }}</td>
                                                                    <td value="{{$user->role_id}}">{{$user->role_name}}</td>
                                                                    <td>{{$user->route_name or 'N/A'}}</td>
                                                                    @if($user->user_status == 1)
                                                                    <td><span class="badge badge-success">Active</span></td>
                                                                    @else
                                                                    <td><span class="badge badge-danger">Inactive</span></td>
                                                                    @endif
                                                                    <td>
                                                                        <div class="dropdown mo-mb-2">
                                                                            <div class="actionDrop">
                                                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    Action
                                                                                </button>
                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a class="dropdown-item" href="{{route('user.edit', $user->user_id)}}">Edit</a>
                                                                                    @if($user->user_status == 1)
                                                                                    <a class="dropdown-item device_status" value="{{$user->user_id}}" href="/user/status">Inactive</a>
                                                                                    @else
                                                                                    <a class="dropdown-item device_status" value="{{$user->user_id}}" href="/user/status">Activate</a>

                                                                                    @endif
                                                                                    <a class="dropdown-item delete_user" value="{{$user->user_id}}" href="/user/delete">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                                
                                                            </tbody>
                                                        </table>
                                                        @if(count($admins)==0)
                                                        <span style="text-align: center;">
                                                        <h4 style="color:gray;align:center;">No data found</h4>
                                                        </span>
                                                        @endif
                                                        {{$users->links("pagination::bootstrap-4")}}
                                                    </div>        
                                                </div>
                                            </div>


                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                              <div class="profile-form-detail">
                                                <div id="customer_data">
                                                    @include('company.pagination.customerTbl')
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
              <input type="hidden" name="customer_id" id="customer_id" value="">
                  
                @include('layouts.admin.adminFooter')

<script>
    $(document).on('click', '.pagination a', function(event){
        event.preventDefault(); 
        
        var page = $(this).attr('href').split('page=')[1];
        fetch_data(page);
    });

    //fetch record
    function fetch_data(page)
    {
        let company_id ='{{$id}}';
        let text =null;
        console.log(company_id);
        $.ajax({
            url:"/fetchCustomer?page="+page+"&query="+text+"&company_id="+company_id,
            success:function(data)
            {
                console.log(data)
                $('#customer_data').html(data);
            }
        });
    }


</script>                


@endsection
