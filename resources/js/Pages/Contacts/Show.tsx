import ContactRatingCircle from '@/components/ui/ContactRatingCircle';
import DefaultLayout from '@/layouts/default-layout';
import { LanguageEnum, Rating, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

interface Contact {
    id: number;
    name: string;
    description: string;
    language: LanguageEnum;
    rating: Rating;
    persona_ids: number[];
    persona_types: { id: number; name: string }[];
    communication_logs: {
        id: number;
        contacted_at: string;
    }[];
}

type Props = {
    contact: Contact;
} & SharedData;

export default function Show() {
    const { contact } = usePage<Props>().props;

    return (
        <>
            <Head title="Edit Contact"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Show Contact</h1>
                    <p className="text-gray-600">View the contact details below</p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <p className="text-gray-900">{contact.data.name}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                                <ContactRatingCircle contact={contact.data} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                                {/* TODO make dynamic */}
                                <p>{contact.data.language === 1 ? 'English' : contact.data.language === 2 ? 'Polish' : contact.data.language}</p>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <p className="text-gray-900">{contact.data.description}</p>
                            </div>
                        </div>
                    </div>

                    {contact.data.persona_types && contact.data.persona_types.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Persona Types</h3>
                            <div className="flex flex-wrap gap-2">
                                {contact.data.persona_types.map((persona) => (
                                    <span
                                        key={persona.id}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                                    >
                                        {persona.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {contact.data.communication_logs && contact.data.communication_logs.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Logs</h3>
                            <div className="space-y-2">
                                {contact.data.communication_logs.map((log) => (
                                    <div
                                        key={log.id}
                                        className="flex items-center p-3 bg-gray-50 rounded-lg border"
                                    >
                                        <div className="flex-1">
                                            <span className="text-sm text-gray-600">
                                                Contacted on: {new Date(log.contacted_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </DefaultLayout>
        </>
    );
}
