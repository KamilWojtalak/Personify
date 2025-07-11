<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunicationLog extends Model
{
    /** @use HasFactory<\Database\Factories\CommunicationLogFactory> */
    use HasFactory;

    protected $fillable = [
        'contact_id',
        'contacted_at',
    ];

    protected $casts = [
        'contacted_at' => 'datetime',
    ];

    public static function booted()
    {
        static::creating(function (self $communicationLog) {
            $communicationLog->contacted_at = now();
        });
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
