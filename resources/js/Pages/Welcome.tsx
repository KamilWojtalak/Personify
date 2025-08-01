import PersonaTypesTree from '@/components/PersonaTypesTree';
import ContactRatingCircle from '@/components/ui/ContactRatingCircle';
import EditLink from '@/components/ui/EditLink';
import ShowLink from '@/components/ui/ShowLink';
import DefaultLayout from '@/layouts/default-layout';
import { Contact, PersonaType, Resource, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type WelcomeProps = {
    latestContacts: Resource<Contact>;
    personaTypes: Resource<PersonaType>;
    personaTypesCount: number;
    contactsCount: number;
} & SharedData;

export default function Welcome() {
    const { latestContacts, personaTypes, contactsCount, personaTypesCount } = usePage<WelcomeProps>().props;

    return (
        <>
            <Head title="Dashboard"></Head>
            <DefaultLayout>
                <div className="grid grid-cols-12 gap-6">
                    {/* <!-- Stats Cards --> */}
                    <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2">

                        <div className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
                            <h3 className="text-sm font-medium text-slate-500">Persona Types</h3>
                            <p className="mt-1 text-3xl font-bold text-slate-900">{personaTypesCount}</p>
                        </div>

                        <div className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
                            <h3 className="text-sm font-medium text-slate-500">Total Contacts</h3>
                            <p className="mt-1 text-3xl font-bold text-slate-900">{contactsCount}</p>
                        </div>

                    </div>

                    {/* <!-- Persona Type Tree & People Table Preview --> */}
                    <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm lg:col-span-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Persona Type Tree</h3>
                            <div className="group relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <div className="pointer-events-none absolute bottom-full mb-2 w-60 rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    Group similar personas under one parent type.
                                    <svg
                                        className="absolute top-full left-0 h-2 w-full text-slate-800"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 255 255"
                                        xml:space="preserve"
                                    >
                                        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="tree text-sm">
                            <PersonaTypesTree personaTypes={personaTypes.data} />
                        </div>
                    </div>

                    <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm lg:col-span-6">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Recent People</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Rating</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Last Contact</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* // TODO: component */}
                                    {latestContacts.data.map((contact) => (
                                        <tr className="border-b" key={contact.id}>
                                            <td className="px-4 py-3">
                                                <ContactRatingCircle contact={contact} />
                                            </td>
                                            <td className="px-4 py-3 font-medium text-slate-900">{contact.name}</td>
                                            <td className="px-4 py-3">{contact.created_at}</td>
                                            <td className="flex items-center gap-2 px-4 py-3">
                                                <ShowLink link={route('contacts.show', contact.id)} />
                                                <EditLink link={route('contacts.edit', contact.id)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </DefaultLayout>
        </>
    );
}
