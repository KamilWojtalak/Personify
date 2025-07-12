<?php

namespace App\Services\Models;

use App\Models\PersonaType;
use Illuminate\Database\Eloquent\Collection;

class PersonaTypeService
{
    public function tree(): Collection
    {
        return PersonaType::with('childrenRecursive')
            ->whereNull('parent_id')
            ->orderBy('name')
            ->get();
    }
}
