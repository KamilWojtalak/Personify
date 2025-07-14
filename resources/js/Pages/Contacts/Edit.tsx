import DefaultLayout from '@/layouts/default-layout';
import { LanguageEnum, Rating, SharedData } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface FormData {
    name: string;
    description?: string | null;
    language: string;
    rating: string;
    persona_ids: number[];
}

interface Persona {
    id: number;
    name: string;
}

interface Contact {
    id: number;
    name: string;
    description?: string | null;
    language: LanguageEnum;
    rating: Rating;
    persona_ids: number[];
    persona_types: { id: number; name: string }[];
}

type Props = {
    availablePersonas: Persona[];
    contact: Contact;
} & SharedData;

export default function Edit() {
    const { contact, availablePersonas } = usePage<Props>().props;
    const [personaSearch, setPersonaSearch] = useState('');

    const { data, setData, put, processing, errors } = useForm<FormData>({
        name: contact.name,
        description: contact.description,
        language: contact.language,
        rating: contact.rating,
        persona_ids: contact.persona_types.map(persona => persona.id)
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('contacts.update', contact.id));
    };

    const filteredPersonas = availablePersonas.filter(persona =>
        persona.name.toLowerCase().includes(personaSearch.toLowerCase()) &&
        !data.persona_ids.includes(persona.id)
    );

    const selectedPersonas = availablePersonas.filter(persona =>
        data.persona_ids.includes(persona.id)
    );

    const addPersona = (personaId: number) => {
        setData('persona_ids', [...data.persona_ids, personaId]);
    };

    const removePersona = (personaId: number) => {
        setData('persona_ids', data.persona_ids.filter(id => id !== personaId));
    };

    return (
        <>
            <Head title="Edit Contact"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Edit Contact</h1>
                    <p className="text-gray-600">Update the contact details below</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                            required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="mb-2 block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows={4}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 min-h-[300px]"
                        />
                        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="language" className="mb-2 block text-sm font-medium">
                            Language
                        </label>
                        <select
                            name="language"
                            id="language"
                            value={data.language}
                            onChange={(e) => setData('language', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="1">English</option>
                            <option value="2">Polish</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="mb-2 block text-sm font-medium">
                            Rating
                        </label>
                        <select
                            name="rating"
                            id="rating"
                            value={data.rating}
                            onChange={(e) => setData('rating', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="1">Good</option>
                            <option value="2">Average</option>
                            <option value="3">Poor</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="persona-search" className="mb-2 block text-sm font-medium">
                            Persona Types
                        </label>

                        {/* Available or Filtered personas */}
                        {filteredPersonas.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                                {filteredPersonas.map(persona => (
                                    <button
                                        key={persona.id}
                                        type="button"
                                        onClick={() => addPersona(persona.id)}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    >
                                        {persona.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        <input
                            type="text"
                            id="persona-search"
                            value={personaSearch}
                            onChange={(e) => setPersonaSearch(e.target.value)}
                            placeholder="Search personas..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 mb-2"
                        />

                        {/* Selected personas */}
                        {selectedPersonas.length > 0 && (
                            <div className="mb-2">
                                <div className="flex flex-wrap gap-2">
                                    {selectedPersonas.map(persona => (
                                        <span
                                            key={persona.id}
                                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                            {persona.name}
                                            <button
                                                type="button"
                                                onClick={() => removePersona(persona.id)}
                                                className="ml-1 text-blue-600 hover:text-blue-800"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
                    >
                        {processing ? 'Updating...' : 'Update Contact'}
                    </button>
                </form>
            </DefaultLayout>
        </>
    );
}
