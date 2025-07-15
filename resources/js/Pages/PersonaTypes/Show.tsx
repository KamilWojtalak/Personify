import DefaultLayout from "@/layouts/default-layout";
import { Contact, SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";

interface PersonaType {
    id: number;
    name: string;
    description?: string;
    parent_id?: number | null;
    parent?: string | null;
    contacts?: Contact[];
}

type Props = {
    personaType: PersonaType;
} & SharedData;

export default function Show() {
    const { personaType } = usePage<Props>().props;

    return (
        <>
            <Head title="Show Persona Type"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Show Persona Type</h1>
                    <p className="text-gray-600">View the details of the selected persona type</p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Persona Type Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <p className="text-gray-900">{personaType.name}</p>
                            </div>

                            {personaType.parent && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent Type</label>
                                    <p className="text-gray-900">{personaType.parent.name}</p>
                                </div>
                            )}

                            {personaType.description && (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <p className="text-gray-900">{personaType.description}</p>
                                </div>
                            )}

                            {personaType.contacts && (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contacts</label>
                                    <div className="text-gray-900">
                                        {personaType.contacts.map((contact, index) => (
                                            <span key={contact.id}>
                                                <a href={route('contacts.edit', contact.id)} className="text-blue-600 hover:text-blue-800 underline">
                                                    {contact.name}
                                                </a>
                                                {index < personaType.contacts.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
