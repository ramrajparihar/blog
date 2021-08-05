@extends('layouts.frontendHeader')
@section('title',"| Company Login")
@section('content')

<html lang="en">

<body>
<div class="mrginTop"></div>
<!--companySignup-->
<div class="greyPestForm SignupForm backgroundGrey sec-pad-60 minHgtFooter">
    <div class="container">
        <form class="formBox loginForm formSignup" id="submit_form" action='/companySignin', method='POST'>
        {{ csrf_field()}}
        @if(\Session::has('success'))
                <div class="alert alert-success">
                    {{\Session::get('success')}}
                </div>
            @endif
            
            @if (Session::has('errors'))
                <div class="alert alert-danger">
                    <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                    </ul>
                </div>
            @endif
            <h2>Welcome to GreyState</h2>
            <div class="formWrap">
                <p class="para">Enter Details to Login</p>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <input type="text" class="form-control" id="" name="email" aria-describedby="" placeholder="Enter Email">
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <input type="password" class="form-control" id="" name="company_password" aria-describedby="" placeholder="Password">
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-20">
                        <div class="respLogin d-flex">
                            <div class="chckBox">
                                <!-- <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Remember Password</label>
                                </div> -->
                            </div>
                            <!-- <div class="ml-auto">
                                <a href="#" class="frgotPassrd">Forgot Password?</a>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="resFloat float-left">
                       
                            <div class="otherForm">
                                Not Registered. <a href="{{ route('register') }}">Signup</a>
                            </div> 
                        </div>
                        <div class="resFloat float-right">
                            <button type='button' class="btn btn-custom btn-custom.theme-color btnSlider btnSlider2 submit_btn">Login</button>
                            <!-- <a href="../Backend_Grey_State_Pest_Control/vertical/index.html" class="btn btn-custom btn-custom.theme-color btnSlider btnSlider2">Login</a> -->

                        </div>
                    </div>                    
                </div>
            </div>
        </form>
    </div>
</div>
<!--footer-->
@include('layouts.frontendFooter')
<script>
var submit_form = $("#submit_form");
 submit_form.validate({
      
    rules: {
        email: {
            required: true,
            normalizer:function( value ){
                return $.trim(value);
                }
          },
          company_password: {
          required: true,
          normalizer:function( value ){
                return $.trim(value);
                }
          },
        },
    messages: {
        email: {
            required: "Please enter email." 
          },
          company_password: {
            required: "Please enter password." 
          },
    }
  });


$(document).on('click','.submit_btn',function(){
    if (submit_form.valid() !== true) {
    toastr.error(proceed_err);
    return false;
    }

    var _that = $(this),
    form = _that.closest("form"),
    formData = new FormData(form[0]),
    f_action = $(form).attr("action");
    console.log(f_action);
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
               // toastr.success('<h5>'+data.msg+'</h5>');
               // window.setTimeout(function() {
                //Redirect to new page
                 window.location = '/companyHome';
               // }, 3000);
            } else if (data.status == -1) {
                //Session expired
                toastr.error(data.msg);
                window.setTimeout(function() {
                    //Redirect to login
                  //  window.location.href = '/customerLogin';
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
</body>
</html>
@endsection
