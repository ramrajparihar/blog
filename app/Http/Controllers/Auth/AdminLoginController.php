<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Auth;
use Log;
use DB;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
class AdminLoginController extends Controller
{

    use AuthenticatesUsers;
    public function __construct()
        {
            $this->middleware('guest')->except('logout');
            // $this->middleware('guest:admin')->except('logout');
            // $this->middleware('guest:writer')->except('logout');
        }

        public function showLoginForm()
        {
         
            return view('auth.superAdminLogin');
        }

        public function adminLogin(Request $request){
            Log::info($request);

            if (Auth::attempt(['email' => $request->user_email_id, 'password' => $request->password])) {            //Authentication passed...
                Log::info('enterdaa');
               
              //  return redirect()->intended('/adminDashboard');
              return array('status'=>1,'msg'=>'done','data'=>["company_status"=>2]);
            }
            return array('status'=>-1,'msg'=>'Invalid! email or password','data'=>["company_status"=>2]);
          //  return redirect()->back()->withErrors('Login fail, Please try again!');
    
        }
    

        public function logout(){
          
            Auth::logout();
            return view('auth.superAdminLogin');
           
         }

        public function username()
        {
            return 'user_email_id';
        }
}
