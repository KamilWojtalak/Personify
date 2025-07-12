<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        dd('index of contacts, add Resource');

        return Inertia::render('Contacts/Index', [
            // TODO resource
            'contacts' => $contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contacts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        dd('TODO');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        dd('add Resource');

        return Inertia::render('Contacts/Show', [
            // TODO resource
            'contact' => $contact,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        dd('add Resource');
        dd('Edit Contact', $contact);

        return Inertia::render('Contacts/Edit', [
            // TODO resource
            'contact' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        dd('TODO');
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        dd('TODO');
        //
    }
}
