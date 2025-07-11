<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactPersonaType extends Model
{
    /** @use HasFactory<\Database\Factories\ContactPersonaTypeFactory> */
    use HasFactory;

    protected $fillable = [
        'contact_id',
        'persona_type_id',
    ];
}
