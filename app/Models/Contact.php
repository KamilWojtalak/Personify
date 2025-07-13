<?php

namespace App\Models;

use App\Enums\ContactRatingEnum;
use App\Enums\LanguageEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'language',
        'rating',
    ];

    protected $casts = [
        'language' => LanguageEnum::class,
        'rating' => ContactRatingEnum::class,
    ];

    public function communicationLogs()
    {
        return $this->hasMany(CommunicationLog::class);
    }

    public function links()
    {
        return $this->hasMany(Link::class);
    }

    public function personaTypes()
    {
        return $this->belongsToMany(PersonaType::class, 'contact_persona_types');
    }
}
