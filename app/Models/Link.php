<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    /** @use HasFactory<\Database\Factories\LinkFactory> */
    use HasFactory;

    protected $fillable = [
        'contact_id',
        'label',
        'url',
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
