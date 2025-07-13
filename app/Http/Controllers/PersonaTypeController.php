<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonaTypeRequest;
use App\Http\Requests\UpdatePersonaTypeRequest;
use App\Models\PersonaType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PersonaTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('PersonaTypes/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('PersonaTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonaTypeRequest $request)
    {
        $data = $request->validated();

        PersonaType::create($data);

        return redirect()->route('persona-types.index')->with('success', 'Persona Type created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(PersonaType $personaType): Response
    {
        return Inertia::render('PersonaTypes/Show', [
            'personaType' => $personaType,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PersonaType $personaType): Response
    {
        return Inertia::render('PersonaTypes/Edit', [
            'personaType' => $personaType,
        ]);
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

    public function search(Request $request)
    {
        $query = $request->input('q');
        // TODO add search local scope
        $results = PersonaType::whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($query) . '%'])->get();

        return response()->json($results);
    }
}
