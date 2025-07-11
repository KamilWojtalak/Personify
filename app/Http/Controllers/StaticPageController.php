<?php

namespace App\Http\Controllers;

use App\Http\Resources\WelcomeContactResource;
use App\Http\Resources\WelcomePersonaTypeResource;
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
            'latestContacts' => WelcomeContactResource::collection($latestContacts),
            'personaTypes' => WelcomePersonaTypeResource::collection($personaTypes),
        ]);
    }
}
