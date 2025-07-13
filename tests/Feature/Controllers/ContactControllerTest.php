<?php

use App\Enums\ContactRatingEnum;
use App\Enums\LanguageEnum;
use App\Models\Contact;
use App\Models\PersonaType;

test('store contact', function () {
    $name = 'New Contact';
    $description = 'Description of new contact';
    $rating = ContactRatingEnum::AVERAGE->value;
    $language = LanguageEnum::ENGLISH->value;


    $response = $this->post(route('contacts.store'), [
        'name' => $name,
        'description' => $description,
        'rating' => $rating,
        'language' => $language,
    ]);


    $response->assertRedirect(route('contacts.index'));

    $this->assertDatabaseHas('contacts', [
        'name' => $name,
        'description' => $description,
        'rating' => $rating,
        'language' => $language,
    ]);
});

test('create contact with persona types', function () {
    $personas = PersonaType::factory()->count(2)->create();

    $name = 'Contact with Persona';
    $description = 'Contact description with persona';
    $rating = ContactRatingEnum::GOOD->value;
    $language = LanguageEnum::ENGLISH->value;

    $personaTypeIds = $personas->pluck('id')->toArray();


    $response = $this->post(route('contacts.store'), [
        'name' => $name,
        'description' => $description,
        'rating' => $rating,
        'language' => $language,
        'persona_ids' => $personaTypeIds,
    ]);


    $response->assertRedirect(route('contacts.index'));

    $this->assertDatabaseHas('contacts', [
        'name' => $name,
        'description' => $description,
        'rating' => $rating,
        'language' => $language,
    ]);

    $contact = Contact::where('name', $name)->first();
    $this->assertEquals($personaTypeIds, $contact->personaTypes->pluck('id')->toArray());
});

test('delete contact', function () {
    $contact = Contact::factory()->create();


    $response = $this->delete(route('contacts.destroy', $contact->id));


    $response->assertRedirect(route('contacts.index'));

    $this->assertDatabaseMissing('contacts', [
        'id' => $contact->id,
    ]);
});
