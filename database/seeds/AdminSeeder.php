<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'is_admin' =>1,
            'firstname'=>'Admin',
            'lastname'=>'User',
            'email'=>'admin@pest.com',
           // 'username'=>'admin',
            'status'=>1,
            //'is_deleted'=>2,
            'created_at'=>date('Y-m-d H:i:s',strtotime('now')),
            'password' => Hash::make('123456'),
        ]);
    }
}
