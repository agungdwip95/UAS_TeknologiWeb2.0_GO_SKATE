<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skateboard extends Model
{
    use HasFactory;

    /** 
     * fillable
     * 
     * @var array
     */
    protected $fillable = [
        'jenis_skateboard',
        'merk',
        'harga',
        'keterangan'
    ];
}
