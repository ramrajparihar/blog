<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/adminLogin', 'Auth\AdminLoginController@showLoginForm');
Route::post('/adminLogin', 'Auth\AdminLoginController@adminLogin');

//Admin Route
Route::get('/adminDashboard', 'Admin\AdminController@showAdminDashboard');
Route::get('/adminLogout', 'Admin\AdminLoginController@logout')->name('adminLogout');
Route::get('/companydetail/{id}', 'Admin\AdminController@companyProfile')->name('companydetail');
Route::get('/allCompany', 'Admin\AdminController@showAllCompany');
Route::get('/fetchCustomer', 'Admin\AdminController@fetchCustomer');
Route::get('/resetCompanyPassword/{company_id}', 'Admin\AdminController@resetCompanyPassword')->name('resetPassword');
Route::get('/companyActiveInactive/{result}/{status}', 'Admin\AdminController@changeCompanyStatus');

//Auth::routes();


Route::get('/home', 'HomeController@index')->name('home');


Route::get('/category', 'Admin\CategoryController@index');
Route::get('/editCategory/{id}', 'Admin\CategoryController@showEditPage');
Route::post('/editCategory', 'Admin\CategoryController@edit');

Route::get('/addCategory', 'Admin\CategoryController@show');
Route::post('/addCategory', 'Admin\CategoryController@store');
Route::get('/deleteCategory/{route_id}', 'Admin\CategoryController@delete');
Route::get('/category/pagination/fetch_data', 'Admin\CategoryController@fetch_data');
Route::get('/category/search/{text?}', 'Admin\CategoryController@search');

// Product Route
Route::get('/product', 'Admin\ProductController@index');
Route::get('/editProduct/{id}', 'Admin\ProductController@showEditPage');
Route::post('/editProduct', 'Admin\ProductController@edit');
Route::get('/addProduct', 'Admin\ProductController@show');
Route::post('/addProduct', 'Admin\ProductController@store');
Route::get('/deleteProduct/{route_id}', 'Admin\ProductController@delete');
Route::get('/product/pagination/fetch_data', 'Admin\ProductController@fetch_data');
Route::get('/product/search/{text?}', 'Admin\ProductController@search');
