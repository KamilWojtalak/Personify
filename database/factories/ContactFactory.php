<?php

namespace Database\Factories;

use App\Enums\ContactRatingEnum;
use App\Enums\LanguageEnum;
use Carbon\Language;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'language' => $this->faker->randomElement(LanguageEnum::cases()),
            'rating' => $this->faker->randomElement(ContactRatingEnum::cases()),
        ];
    }
}
