<?php

namespace Database\Seeders;

use App\Models\Contact;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommunicationLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::each(function ($contact) {
            $logsToCreate = random_int(1, 3);

            for ($i = 0; $i < $logsToCreate; $i++) {
                $contact->communicationLogs()->create([
                    'contacted_at' => Carbon::now()->subDays(random_int(1, 90)),
                ]);
            }
        });
    }
}
