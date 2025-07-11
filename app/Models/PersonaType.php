<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonaType extends Model
{
    /** @use HasFactory<\Database\Factories\PersonaTypeFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function contacts()
    {
        return $this->belongsToMany(Contact::class, 'contact_persona_types');
    }

    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
