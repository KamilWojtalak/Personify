import ContactRatingCircle from "@/components/ui/ContactRatingCircle";
import DeleteLink from "@/components/ui/DeleteLink";
import EditLink from "@/components/ui/EditLink";
import ShowLink from "@/components/ui/ShowLink";
import DefaultLayout from "@/layouts/default-layout";
import { Pagination, SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";

interface ContactType {
    id: number;
    name: string;
}

type Props = {
    contacts: Pagination<ContactType>;
} & SharedData;

export default function Index() {
    const { contacts } = usePage<Props>().props;

    return (
        <>
            <Head title="Persona Types"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Persona Types</h1>
                    <p className="text-gray-600">List of all persona types</p>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contacts.data.map((contact) => (
                                <tr key={contact.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {contact.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center gap-2">
                                        <ContactRatingCircle contact={contact} />

                                        {contact.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex space-x-2">
                                            <ShowLink link={route('contacts.show', contact.id)} />
                                            <EditLink link={route('contacts.edit', contact.id)} />
                                            <DeleteLink link={route('contacts.destroy', contact.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </DefaultLayout>
        </>
    );
}
