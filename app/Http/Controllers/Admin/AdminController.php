<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use Auth;
use Hash;
use Mail;
use Log;
use DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function showAdminDashboard()
    {

       // $companyCount = DB::table('companies')->count();

        return view('admin.adminDashboard');

    }

    public function companyProfile($id)
    {

        $company = Company::where('company_id', $id)->first();

        $role_id = Auth::user()->role_id;
        $users = User::leftJoin('user_licence_details', 'user_licence_details.user_id', 'users.user_id')
            ->leftJoin('user_routes', 'user_routes.user_id', 'users.user_id')
            ->leftJoin('routes', 'routes.route_id', 'user_routes.route_id')
            ->leftJoin('user_roles', 'user_roles.role_id', 'users.role_id')
            ->where('users.company_id', $id)
            ->where('users.is_deleted', 2)
            ->select('users.user_id', 'users.user_firstname', 'users.user_lastname', 'users.role_id', 'users.company_id',
                'users.user_country_code', 'users.user_contact_number', 'users.user_email_id', 'users.user_status',
                'users.user_home_address', 'user_licence_details.user_licence_id', 'user_licence_details.user_licence_number',
                'user_licence_details.user_licence_image', 'routes.route_name', 'user_routes.user_route_id', 'user_roles.role_name')
            ->orderby('users.user_id', 'DESC')
            ->paginate(10);

        $admins = $users->where('role_id',1);
        $technicians = $users->where('role_id',2);
        

        $customers = Customer::join('site_contacts', 'site_contacts.customer_id', 'customers.customer_id')
            ->where('customers.company_id', $id)
        //->where('cust_status',1)
            ->where('site_contacts.is_default', 1)
            ->orderby('customers.cust_company_name')
            ->select('customers.customer_id', 'cust_company_name', 'cust_status', 'email')
            ->paginate(10);

        $user_counts = User::where('users.company_id', $id)
            ->where('users.is_deleted', 2)->count();

        $customer_counts = Customer::where('customers.company_id', $id)
        //->where('cust_status',1)
        //->where('is_deleted',2)
            ->count();

        return view('admin.companyProfile', compact('company', 'users', 'customers', 'role_id', 'user_counts', 'customer_counts','id','admins','technicians'));
    }

    /**
     * Show all company
     */
    public function showAllCompany()
    {

        $companies = DB::table('companies')->orderby('company_id', 'desc')->paginate(10);

        return view('company.companies', compact('companies'));
    }


    /**
     * paginate customer
     * 
     */
    public function fetchCustomer(Request $request)
    {
       
        if ($request->ajax()) {
            $text = $request->get('query');

            $customers = Customer::where('company_id', $request->company_id)
              ->paginate(10);

            $customers->withPath('yourPath');
            $customers->appends($text);

            return view('company.pagination.customerTbl', compact('customers'))->render();
        }
    }

    /**
     * Reset comapny main password
     * @param integer company_id
     * @return response
     */
    function resetCompanyPassword($company_id){

       $company = Company::find($company_id);
       
       $password = rand('100000','999999');
       

       $info_array = array('company_name'=>$company->company_name,'email'=>$company->company_email,'password'=>$password);
    
       try{
       Mail::to($company->company_email)->send(new CompanyResetPasswordMail($info_array));
       }catch(Exception $e){
           Log::error($e);
           return back()->with('error',"Something went wrong. Please try after some time");
        //return array('status' =>-1, 'msg' => 'Something went wrong. Please try after some time', 'data' => ['password'=>$password]); 
       }

       $company->password = Hash::make($password) ;

       $company->save();
       return back()->with('success',"Email sent successfully. Password is: $password");
       //return array('status' =>1, 'msg' => 'Email sent successfully', 'data' => ['password'=>$password]);
    }

    /**
     * Change company status
     */
    public function changeCompanyStatus($result,$company_id){

        
        $company = DB::table('companies')->select('company_status')->where('company_id',$company_id)->first();

        if($company->company_status== 2){
        
            $company = DB::table('companies')->where('company_id',$company_id)->update(['company_status'=>1]);

            return array('status'=>1,'msg'=>'Registration done successfully','data'=>["company_status"=>1]);
        }else{
            $company = DB::table('companies')->where('company_id',$company_id)->update(['company_status'=>2]);
            return array('status'=>1,'msg'=>'Registration done successfully','data'=>["company_status"=>2]);

        }
    }


    /**
     * Search company
     */
    public function search(Request $request)
    {
        $text = $request->get('text');
        $filter = null;
        $filter = $request->get('filter');
       
        if ($filter == 'Active') {
            $filter = 1;
        }
        if ($filter == 'Inactive') {
            $filter = 2;
        }
        if ($filter == 'Select Status') {
            $filter = null;
        }

        $company_id = Auth::user()->company_id;
        $companies = Company::
            where(function ($query) use ($text) {
            return $query->where('company_name', 'like', '%' . $text . '%')
                ->orWhere('company_phone', 'like', '%' . $text . '%');
            })
            ->when($filter, function ($query) use ($filter) {
                return $query->where('company_status', $filter);
            })
            ->orderby('company_id', 'desc')
            ->paginate(10);

        $companies->withPath('yourPath');
        $companies->appends($text);
        return view('company.pagination.companyTbl', compact('companies'))->render();

    }


    public function fetch_data(Request $request)
    {
        $text = $request->get('query');
        $filter = null;
        $filter = $request->get('filter');
       
        if ($filter == 'Active') {
            $filter = 1;
        }
        if ($filter == 'Inactive') {
            $filter = 2;
        }
        if ($filter == 'Select Status') {
            $filter = null;
        }

        if ($request->ajax()) {
            $companies = DB::table('companies')
                ->where(function ($query) use ($text) {
                    return $query->where('company_name', 'like', '%' . $text . '%')
                        ->orWhere('company_phone', 'like', '%' . $text . '%');
                })
                ->when($filter, function ($query) use ($filter) {
                    return $query->where('company_status', $filter);
                })
                ->orderby('company_id', 'desc')
                ->paginate(10);

            $companies->withPath('yourPath');
            $companies->appends($request->all());
            return view('company.pagination.companyTbl', compact('companies'))->render();
        }
    }

}
