<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommunicationLog>
 */
class CommunicationLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'contact_id' => \App\Models\Contact::factory(),
            'contacted_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
        ];
    }
}
