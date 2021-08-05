<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
   }

   public function index(){
      
   
    $categories = Category::paginate(20);

       return view('admin.category',compact('categories'));
   }

   /**
     * display add location area form.
     *
     * @return Response
     */
    public function show($id){
     
        return view('admin.addCategory');
    }

    function showEditPage($id){
      $category = Category::find($id);

      return view('admin.editCategory',compact('category'));
    }


    /**
     * Store a newly created location type in storage.
     *
     * @return Response
     */
    public function store(Request $request){
     
    
      //check route is exists or not
      $name = Category::where('name',$request->name)
      ->get();
     
      if(count($name) >0){
        return array('status'=>-1,'msg'=>'Category already registered','data'=>[]);

      }
      if($request->hasFile('file')){
        $filesize =$request->file('file')->getSize();
       
        
        if($filesize > 2097152){
            return array('status'=>-1,'msg'=>"License image should not be greater than 2mb",'data'=>[]);
        }

        $imageName = time().'.'.request()->file->getClientOriginalExtension();
   
        request()->file->move(public_path('backend_asset/images'), $imageName);
      }
      $model = new Category();
      $model->name = $request->name;
      $model->description =$request->description;
      $model->image = $imageName;
       $model->save();
       
     // Category::create(['name'=>$request->name,'description'=>$request->description]);
      
     // $listView = self::getPaginateList($location_id);
     
      //return back();
      return array('status'=>1,'msg'=>'Category added successfully','data'=>['route'=>'/category']);

      
    }

     /**
     * Store a newly created location type in storage.
     *
     * @return Response
     */
    public function edit(Request $request){
     
    
      //check route is exists or not
      // $name = Category::
      // where('id','!=',$request->id)
      // ->get();
     
      // if(count($name) >0){
      //   return array('status'=>-1,'msg'=>'Category already registered','data'=>[]);

      // }
      if($request->hasFile('file')){
        $filesize =$request->file('file')->getSize();
       
        
        if($filesize > 2097152){
            return array('status'=>-1,'msg'=>"License image should not be greater than 2mb",'data'=>[]);
        }

        $imageName = time().'.'.request()->file->getClientOriginalExtension();
   
        request()->file->move(public_path('backend_asset/images'), $imageName);
      }
      $model =Category::find($request->id);
      $model->name = $request->name;
      $model->description =$request->description;
     // $model->image = $imageName;
       $model->save();
       
     // Category::create(['name'=>$request->name,'description'=>$request->description]);
      
     // $listView = self::getPaginateList($location_id);
     
      //return back();
      return array('status'=>1,'msg'=>'Category updated successfully','data'=>['route'=>'/category']);

      
    }

    /**
     * Remove the location from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function delete($id){

     // $exists = DB::table('wor_devices')->where('loc_area_id',$id)->where('is_deleted',2)->get();
      // if(count($exists) > 0){
      //   return array('status'=>-1,'msg'=>'Material condition can not be deleted. It is associated with work order.','data'=>["route"=>"/sanitation"]);

      // }
      Log::info('inse delete');
     
      Category::where('loc_area_id',$id)->delete();


        return array('status'=>1,'msg'=>'deleted successfully');

    }

    function fetch_data(Request $request)
    {
       
     if($request->ajax())
     { 
      
        $text = $request->get('query');

        //get location type of a company
        $categories = Category::
        when($text, function ($query) use ($text) {
          return $query->where('name','like','%'.$text.'%');
        })
       
        ->orderby('name')
        ->paginate(20);
        
       
       $categories->withPath('yourPath');
        $categories->appends($request->all());

        return view('admin.pagination.categoryTbl', compact('categories'))->render();
      }
    }

    function search($text=null)
    {
      \Log::info($text);
     $categories = Category:: 
      where('name','like','%'.$text.'%')
       ->orderby('name')
      ->paginate(20);
     
      return view('admin.pagination.categoryTbl', compact('categories'))->render();
     

    }

    public function getPaginateList(){
      $categories = Category::orderby('name')
      ->paginate(20);
      $renderView = view('admin.pagination.categoryTbl', compact('categories'))->render();

      return $renderView;
    }

    /**
     * update resource
     */
    public function edddit(Request $request){

      Log::info($request);
      $id = $request->id;
      //check route is exists or not
      $name = Category::where('loc_area_id','!=',$id)
      ->where('name',$request->name)
     
      ->get();
     
      if(count($name) >0){
        return array('status'=>-1,'msg'=>'Location area already registered','data'=>[]);

      }

      $model =Category::find($id);
      $model->name = $request->name;

      $model->save();
     
      
      $listView = self::getPaginateList();
     
   
      return array('status'=>1,'msg'=>'updated successfully','data'=>['view'=>$listView]);

    }

}
