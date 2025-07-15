<?php

namespace App\Http\Controllers;

use App\Http\Resources\ListingContactResource;
use App\Http\Resources\ListingPersonaTypeResource;
use App\Services\Models\ContactService;
use App\Services\Models\PersonaTypeService;
use Inertia\Inertia;
use Inertia\Response;

class StaticPageController extends Controller
{
    public function __construct(
        private ContactService $contactService,
        private PersonaTypeService $personaTypeService
    ) {
        //
    }

    public function welcome(): Response
    {
        $latestContacts = $this->contactService->latest();
        $personaTypes = $this->personaTypeService->tree();

        return Inertia::render('Welcome', [
            'latestContacts' => ListingContactResource::collection($latestContacts),
            'personaTypes' => ListingPersonaTypeResource::collection($personaTypes),
            'personaTypesCount' => $this->personaTypeService->count(),
            'contactsCount' => $this->contactService->count()
        ]);
    }
}
