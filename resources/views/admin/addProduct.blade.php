@extends('layouts.admin.main')
@section('adminHeader')
@include('layouts.admin.adminHeader')
@endsection
@section('title','| Add Product')

@section('adminSidebar')
@include('layouts.admin.adminSidebar')
@endsection

@section('content')
<div class="content-page">
                <!-- Start content -->
                <div class="content">
                <form action="/addProduct" method="POST" id="submit_form"> 
                {{ csrf_field() }}
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">                                
                                <div class="col-sm-12">
                                    <h4 class="page-title">Product</h4>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row justify-content-md-center">
                            <div class="col-lg-6 col-xs-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title mb-4">General Information</h4>
                                        <form action="#">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" name="name" class="form-control" placeholder="Enter Name">
                                            </div> 
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" name="description" class="form-control" placeholder="Enter Description">
                                            </div> 
                                            <div class="form-group">
                                                <label>Image</label>
                                                <input type="file" name="file" class="form-control">
                                            </div>       
                                        </form>        
                                    </div>
                                </div>
                                <div class="text-right mr-2 mb-2">
                                 <a href="/category"  class="btn btn-secondary waves-effect waves-light">Cancel</a>
                                    <button type="button" id="submit_btn" class="btn btn-dark waves-effect waves-light">Add</button>

                                </div>         
                            </div>
                        </div> <!-- end row -->                        
                    </div>
                    <!-- container-fluid -->
                </div>
                </form>   
                @include('layouts.company.companyFooter')
            </div>
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
        </div>

        <script>

$(document).ready(function(){
        $("form").bind("keypress", function(e) {
            if (e.keyCode == 13) {
                return false;
            }
        });
    });

   
 //validate location type
 var submit_form = $("#submit_form");
 submit_form.validate({
      
    rules: {
        name: {
            required: true,
            minlength:2,
            
          },
          description: {
            required: true,
            minlength:2,
            
          },
        },
    // messages: {
    //     name: {
    //         required: "Application methods name is a required field." ,
    //         minlength:"Please enter at least 2 characters."
    //       },
    // }
  });

  $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

//add trap type
  $("body").on("click", "#submit_btn", function(event) {

    if (submit_form.valid() !== true) {
        
    toastr.error(proceed_err);
    return false;
    }

    //disable buton after submit form
   // $('#submit_btn').prop('disabled',true);

    var _that = $(this),
    form = _that.closest("form"),
    formData = new FormData(form[0]),
    f_action = $(form).attr("action");
    
    $.ajax({
        type: "POST",
        url: f_action,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "JSON",
   
        success: function(data, textStatus, jqXHR) {
          
           console.log(data);
            if (data.status == 1) {
                toastr.success('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                //Redirect to new page
                 window.location = data.data.route;
                }, 3000);
            } else if (data.status == -1) {
                //Session expired
                toastr.error('<h5>'+data.msg+'</h5>');
                window.setTimeout(function() {
                    //Redirect to login
                   // window.location.href = data.url;
                }, 1000);
            } else {
              console.log(data);
                //Error (Form validation failed)
                toastr.error(data.msg);
            }
        }
        
    });
});

        </script>
        @endsection  