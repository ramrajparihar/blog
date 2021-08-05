<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable= [
        'image','product_id'
     ];

    /*
    *Get the product that own the product image
    */ 
    public function product(){
        return $this->belongsTo(Post::class);
    }
}
