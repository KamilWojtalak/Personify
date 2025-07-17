<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\ListingContactResource;
use App\Http\Resources\ShowContactResource;
use App\Models\Contact;
use App\Services\Models\ContactService;
use App\Services\Models\PersonaTypeService;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function __construct(private ContactService $service, private PersonaTypeService $personaTypeService)
    {
        //
    }

    public function index(): Response
    {
        // TODO add select
        $contacts = Contact::with('personaTypes')->latest('id')->paginate();

        return Inertia::render('Contacts/Index', [
            'contacts' => ListingContactResource::collection($contacts)
        ]);
    }

    public function create(): Response
    {
        $availablePersonas = $this->personaTypeService->getAvailablePersonas();

        return Inertia::render('Contacts/Create', [
            'availablePersonas' => $availablePersonas,
        ]);
    }

    public function store(StoreContactRequest $request)
    {
        $this->service->store($request->validated());

        return redirect()->route('contacts.index')->with('success', 'Contact created successfully.');
    }

    public function show(Contact $contact): Response
    {
        $contact->load(['personaTypes', 'communicationLogs']);

        return Inertia::render('Contacts/Show', [
            'contact' => new ShowContactResource($contact)
        ]);
    }

    public function edit(Contact $contact): Response
    {
        $contact->load('personaTypes');

        $availablePersonas = $this->personaTypeService->getAvailablePersonas();

        return Inertia::render('Contacts/Edit', [
            'contact' => $contact,
            'availablePersonas' => $availablePersonas,
        ]);
    }

    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $this->service->update($contact, $request->validated());

        return redirect()->route('contacts.edit', $contact->id)->with('success', 'Contact updated successfully.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contacts.index');
    }
}
