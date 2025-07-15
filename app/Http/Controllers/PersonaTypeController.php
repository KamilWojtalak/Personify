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
    public function index(): Response
    {
        // TODO Add resource
        $personaTypes = PersonaType::with('parent')->latest('id')->paginate();

        return Inertia::render('PersonaTypes/Index', [
            'personaTypes' => $personaTypes,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('PersonaTypes/Create');
    }

    public function store(StorePersonaTypeRequest $request)
    {
        $data = $request->validated();

        PersonaType::create($data);

        return redirect()->route('persona-types.index')->with('success', 'Persona Type created successfully.');
    }

    public function show(PersonaType $personaType): Response
    {
        $personaType->load(['parent', 'contacts']);

        return Inertia::render('PersonaTypes/Show', [
            'personaType' => $personaType,
        ]);
    }

    public function edit(PersonaType $personaType): Response
    {
        $personaType->load('parent');

        return Inertia::render('PersonaTypes/Edit', [
            'personaType' => $personaType,
        ]);
    }

    public function update(UpdatePersonaTypeRequest $request, PersonaType $personaType)
    {
        $data = $request->validated();

        $personaType->update($data);

        return redirect()->route('persona-types.index')->with('success', 'Persona Type updated successfully.');
    }

    public function destroy(PersonaType $personaType)
    {
        $personaType->delete();

        return redirect()->route('persona-types.index')->with('success', 'Persona Type deleted successfully.');
    }

    public function search(Request $request)
    {
        $query = $request->input('q');

        $results = PersonaType::search($query)->get();

        return response()->json($results);
    }
}
