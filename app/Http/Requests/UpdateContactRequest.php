<?php

namespace App\Http\Requests;

use App\Enums\ContactRatingEnum;
use App\Enums\LanguageEnum;
use Illuminate\Foundation\Http\FormRequest;

class UpdateContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'language' => 'required|in:' . implode(',', LanguageEnum::values()),
            'rating' => 'required|in:' . implode(',', ContactRatingEnum::values()),
            'persona_ids' => 'array',
            'persona_ids.*' => 'exists:persona_types,id',
        ];
    }
}
