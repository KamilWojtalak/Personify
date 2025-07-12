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
} & SharedData;

export default function Welcome() {
    const { latestContacts, personaTypes } = usePage<WelcomeProps>().props;

    return (
        <>
            <Head title="Dashboard"></Head>
            <DefaultLayout>
                <div className="grid grid-cols-12 gap-6">
                    {/* <!-- Stats Cards --> */}
                    <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="cursor-pointer rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
                            <h3 className="text-sm font-medium text-slate-500">Total Contacts</h3>
                            <p className="mt-1 text-3xl font-bold text-slate-900">1,204</p>
                        </div>
                        <div className="cursor-pointer rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
                            <h3 className="text-sm font-medium text-slate-500">Persona Types</h3>
                            <p className="mt-1 text-3xl font-bold text-slate-900">82</p>
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

                    {/* <!-- Timeline --> */}
                    <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Recent Contacts</h3>
                        <div className="space-y-6">
                            <div className="timeline-item relative pl-8">
                                <div className="timeline-dot rounded-full border-2 border-indigo-500 bg-white"></div>
                                <p className="text-sm text-slate-500">Today, 14:30</p>
                                <p className="font-medium text-slate-800">
                                    Call with{' '}
                                    <a href="#" className="text-indigo-600 hover:underline">
                                        John X
                                    </a>
                                </p>
                            </div>
                            <div className="timeline-item relative pl-8">
                                <div className="timeline-dot rounded-full bg-slate-200"></div>
                                <p className="text-sm text-slate-500">Yesterday, 10:00</p>
                                <p className="font-medium text-slate-800">
                                    Email to{' '}
                                    <a href="#" className="text-indigo-600 hover:underline">
                                        Anna Y
                                    </a>
                                </p>
                            </div>
                            <div className="timeline-item relative pl-8">
                                <div className="timeline-dot rounded-full bg-slate-200"></div>
                                <p className="text-sm text-slate-500">3 days ago</p>
                                <p className="font-medium text-slate-800">
                                    Meeting with{' '}
                                    <a href="#" className="text-indigo-600 hover:underline">
                                        Joe Doe
                                    </a>
                                </p>
                            </div>
                            <div className="timeline-item relative pl-8">
                                <div className="timeline-dot rounded-full bg-slate-200"></div>
                                <p className="text-sm text-slate-500">5 days ago</p>
                                <p className="font-medium text-slate-800">
                                    Added note for{' '}
                                    <a href="#" className="text-indigo-600 hover:underline">
                                        Philip R
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
