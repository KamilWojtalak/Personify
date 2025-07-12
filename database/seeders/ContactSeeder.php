<?php

namespace Database\Seeders;

use App\Enums\ContactRatingEnum;
use App\Enums\LanguageEnum;
use App\Models\Contact;
use App\Models\PersonaType;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $typeNames = [
            'Developer',
            'Lawyer',
            'Sales',
            'Laravel Developer',
            'Wordpress Developer',
            'React Developer',
            'Corporate Lawyer',
            'Frank Loan Lawyer',
            'GDPR Lawyer',
        ];

        $types = PersonaType::whereIn('name', $typeNames)->get();

        $anna = Contact::create([
            'name' => 'Kamil Wojtalak',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::GOOD,
        ]);

        $anna->personaTypes()->attach($types->where('name', 'Laravel Developer')->first()->id);

        $john = Contact::create([
            'name' => 'John Smith',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::AVERAGE,
        ]);

        $john->personaTypes()->attach($types->where('name', 'React Developer')->first()->id);

        $jan = Contact::create([
            'name' => 'Jan Kowalski',
            'language' => LanguageEnum::POLISH,
            'rating' => ContactRatingEnum::POOR,
        ]);

        $jan->personaTypes()->attach($types->where('name', 'Corporate Lawyer')->first()->id);
        $jan->personaTypes()->attach($types->where('name', 'GDPR Lawyer')->first()->id);

        $emily = Contact::create([
            'name' => 'Emily Davis',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::GOOD,
        ]);

        $emily->personaTypes()->attach([$types->where('name', 'Laravel Developer')->first()->id]);
        $emily->personaTypes()->attach([$types->where('name', 'React Developer')->first()->id]);

        $james = Contact::create([
            'name' => 'James Wilson',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::GOOD,
        ]);

        $james->personaTypes()->attach($types->where('name', 'Developer')->first()->id);

        $sarah = Contact::create([
            'name' => 'Sarah Johnson',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::AVERAGE,
        ]);

        $sarah->personaTypes()->attach($types->where('name', 'Lawyer')->first()->id);

        $michael = Contact::create([
            'name' => 'Michael Brown',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::GOOD,
        ]);

        $michael->personaTypes()->attach($types->where('name', 'Wordpress Developer')->first()->id);

        $lisa = Contact::create([
            'name' => 'Lisa Thompson',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::AVERAGE,
        ]);

        $lisa->personaTypes()->attach($types->where('name', 'Sales')->first()->id);

        $david = Contact::create([
            'name' => 'David Anderson',
            'language' => LanguageEnum::ENGLISH,
            'rating' => ContactRatingEnum::GOOD,
        ]);

        $david->personaTypes()->attach($types->where('name', 'Frank Loan Lawyer')->first()->id);
    }
}
