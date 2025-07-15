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

    public function count(): int
    {
        return Contact::count();
    }

    public function store(array $data): Contact
    {
        $contact = Contact::create($data);
        $contact->personaTypes()->sync($data['persona_ids'] ?? []);

        return $contact;
    }

    public function update(Contact $contact, array $data): Contact
    {
        $contact->update($data);
        $contact->personaTypes()->sync($data['persona_ids'] ?? []);

        return $contact;
    }
}
