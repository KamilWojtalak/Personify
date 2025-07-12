<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonaTypeRequest;
use App\Http\Requests\UpdatePersonaTypeRequest;
use App\Models\PersonaType;

class PersonaTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        dd('todo');
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        dd('todo');
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonaTypeRequest $request)
    {
        dd('todo');
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PersonaType $personaType)
    {
        dd('todo');
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PersonaType $personaType)
    {
        dd('todo');
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonaTypeRequest $request, PersonaType $personaType)
    {
        dd('todo');
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PersonaType $personaType)
    {
        dd('todo');
        //
    }
}
