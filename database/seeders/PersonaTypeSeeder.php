<?php

namespace Database\Seeders;

use App\Models\PersonaType;
use Illuminate\Database\Seeder;

class PersonaTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dev = PersonaType::factory()->count(15)->create();

        // parent types
        $dev = PersonaType::create(['name' => 'Developer', 'description' => 'General software developer']);
        $law = PersonaType::create(['name' => 'Lawyer', 'description' => 'Legal professional']);
        PersonaType::create(['name' => 'Sales', 'description' => 'Sales / Biz-dev']);

        // child types
        PersonaType::insert([
            ['name' => 'Laravel Developer', 'description' => 'PHP Laravel specialist', 'parent_id' => $dev->id],
            ['name' => 'Wordpress Developer', 'description' => 'PHP Wordpress specialist', 'parent_id' => $dev->id],
            ['name' => 'React Developer', 'description' => 'Frontend React expert', 'parent_id' => $dev->id],
            ['name' => 'Corporate Lawyer', 'description' => 'Corporate law', 'parent_id' => $law->id],
            ['name' => 'Frank Loan Lawyer', 'description' => 'Frank credit cases', 'parent_id' => $law->id],
            ['name' => 'GDPR Lawyer', 'description' => 'GDPR compliance and data protection', 'parent_id' => $law->id],
        ]);
    }
}
