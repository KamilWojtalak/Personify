<?php

namespace App\Services\Models;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Collection;

class ContactService
{
    public function latest(int $limit = 5): Collection
    {
        return Contact::with('personaTypes')
            ->orderByDesc('updated_at')
            ->take($limit)
            ->get();
    }
}
