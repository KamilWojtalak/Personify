<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\WelcomeContactResource;
use App\Models\Contact;
use App\Services\Models\PersonaTypeService;
use Inertia\Inertia;
use Inertia\Response;

// TODO: add API resources
class ContactController extends Controller
{
    public function __construct(private PersonaTypeService $personaTypeService)
    {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // TODO add select
        // TODO modify API resource
        $contacts = Contact::with('personaTypes')->latest('id')->paginate();

        return Inertia::render('Contacts/Index', [
            'contacts' => WelcomeContactResource::collection($contacts)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $availablePersonas = $this->personaTypeService->getAvailablePersonas();

        return Inertia::render('Contacts/Create', [
            'availablePersonas' => $availablePersonas,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        // TODO service for creating contact
        $contact = Contact::create($request->validated());

        $contact->personaTypes()->sync($request->input('persona_ids', []));

        return redirect()->route('contacts.index')->with('success', 'Contact created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact): Response
    {
        return Inertia::render('Contacts/Show', [
            'contact' => $contact,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact): Response
    {
        $contact->load('personaTypes');

        $availablePersonas = $this->personaTypeService->getAvailablePersonas();

        return Inertia::render('Contacts/Edit', [
            'contact' => $contact,
            'availablePersonas' => $availablePersonas,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());

        $contact->personaTypes()->sync($request->input('persona_ids', []));

        return redirect()->route('contacts.edit', $contact->id)->with('success', 'Contact updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contacts.index');
    }
}
