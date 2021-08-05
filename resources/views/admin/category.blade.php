@extends('layouts.admin.main')
@section('adminHeader')
@include('layouts.admin.adminHeader')
@endsection
@section('title','| Category')

@section('adminSidebar')
@include('layouts.admin.adminSidebar')
@endsection

@section('content')

<div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">                                
                                <div class="col-sm-6">
                                    <h4 class="page-title">Category</h4>
                                </div>
                                <div class="col-sm-6">                                
                                    <div class="float-right d-none d-md-block">
                                        <div class="dropdown">
                                            <a href="/addCategory" class="btn btn-dark waves-effect waves-light">Add Category<div></div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body"> 
                                        <!-- <div class="alert alert-warning alert-dismissible show materialAlert" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <strong>Define the materials you apply during service.</strong>
                                        </div> -->
                                        <form role="search" class="app-search">
                                            <div class="form-group mb-0">
                                                <input type="text" class="form-control" id='searchTbl' placeholder="Search.." />
                                                <button type="submit"><i class="fa fa-search"></i></button>
                                            </div>
                                        </form>   
                                        <div id='table_data'>
                                        @include('admin.pagination.categoryTbl')  
                                        </div>    
                                        
                                    </div>
                                </div>
                            </div> <!-- end col -->
                        </div> <!-- end row --> 
                    </div>
                    <!-- container-fluid -->
                </div>
                @include('layouts.company.companyFooter')
            </div>
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
        </div>
        <script>
       


        //server side search
        $(document).on('keyup', '#searchTbl', function(event){
            let text =$('#searchTbl').val();
            $.ajax({
                url:"/category/search/"+text,
                success:function(data)
                {
                    $('#table_data').html(data);
                }
            });

        });

         //pagination
         $(document).on('click', '.pagination a', function(event){
            event.preventDefault(); 
            
            var page = $(this).attr('href').split('page=')[1];
            fetch_data(page);
        });

        function fetch_data(page)
        {
            let text =$('#searchTbl').val();
            $.ajax({
                url:"category/pagination/fetch_data?page="+page+"&query="+text,
                success:function(data)
                {
                    $('#table_data').html(data);
                }
            });
        }
        //end pagination

$(document).on('click','.delete_pest',function(){
    event.preventDefault();
  console.log('goo');
let  pest_id = this.id;
console.log(pest_id);
  bootbox.confirm({
      message: "Do you want to delete this pest ?",
      buttons: {
          confirm: {
              label: 'Yes',
              className: 'btn-success'
          },
          cancel: {
              label: 'No',
              className: 'btn-danger'
          }
      },
      callback: function (result) {

          if(result){
              $.ajax({
              url: "deleteCategory/"+pest_id, 
              success: function(data){
                  if (data.status == 1) {
                    toastr.success('<h5>'+data.msg+'</h5>');
                  }
                  if (data.status == -1) {
                    toastr.error('<h5>'+data.msg+'</h5>');
                  }
                  window.setTimeout(function() {
                      //Redirect to new page
                          window.location = "/pest";
                  }, 3000);
              }
          });
          }
      }
      });
}); 
//End delete
      </script>
     @endsection 
