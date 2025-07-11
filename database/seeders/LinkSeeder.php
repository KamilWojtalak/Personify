<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LinkSeeder extends Seeder
{
    private array $labels = ['LinkedIn', 'Twitter', 'GitHub', 'Website', 'Facebook'];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Contact::all() as $contact) {
            $linksToCreate = random_int(1, 2);
            $pickedKeys = (array) array_rand($this->labels, $linksToCreate);

            foreach ($pickedKeys as $key) {
                $label = $this->labels[$key];
                $slug = Str::slug($contact->name);

                $url = match ($label) {
                    'LinkedIn' => "https://linkedin.com/in/{$slug}",
                    'Twitter' => "https://twitter.com/{$slug}",
                    'GitHub' => "https://github.com/{$slug}",
                    'Website' => "https://{$slug}.example.com",
                    default => "https://facebook.com/{$slug}",
                };

                $contact->links()->create([
                    'label' => $label,
                    'url' => $url,
                ]);
            }
        }
    }
}
