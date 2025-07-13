<?php

use App\Models\PersonaType;

test('store persona type without parent', function () {
    $name = 'New Persona Type';
    $description = 'Description of new persona type';


    $response = $this->post(route('persona-types.store'), [
        'name' => $name,
        'description' => $description,
    ]);


    $response->assertRedirect(route('persona-types.index'));

    $this->assertDatabaseHas('persona_types', [
        'name' => $name,
        'description' => $description,
        'parent_id' => null,
    ]);
});

test('store persona type with parent', function () {
    $parent = PersonaType::factory()->create();
    $name = 'New Persona Type with Parent';
    $description = 'Description of new persona type with parent';


    $response = $this->post(route('persona-types.store'), [
        'name' => $name,
        'description' => $description,
        'parent_id' => $parent->id,
    ]);


    $response->assertRedirect(route('persona-types.index'));

    $this->assertDatabaseHas('persona_types', [
        'name' => $name,
        'description' => $description,
        'parent_id' => $parent->id,
    ]);
})->only();
