<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable= [
       'name','category_id','sub_cat_id','additional_info','description','image','quantity','sale_price',
       'discount','regular_price'
    ];

    /**
     * Get the product imaage for the product
     */
    public function productImages(){
        return $this->hasMany(ProductImage::class);
    }
}
