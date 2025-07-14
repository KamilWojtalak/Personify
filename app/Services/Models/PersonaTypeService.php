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

    public function getAvailablePersonas(): Collection
    {
        // TODO add some logic, to get the most popular ones, and Add actual searching logic in that view
        return PersonaType::latest('id')->get();
    }
}
