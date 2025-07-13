import DeleteLink from "@/components/ui/DeleteLink";
import EditLink from "@/components/ui/EditLink";
import { Pagination } from "@/components/ui/Pagination";
import ShowLink from "@/components/ui/ShowLink";
import DefaultLayout from "@/layouts/default-layout";
import { Paginate, SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";

interface PersonaType {
    id: number;
    name: string;
    parent_id?: string | null;
    parent?: PersonaType | null;
}

type IndexProps = {
    personaTypes: Paginate<PersonaType>;
} & SharedData;

export default function Index() {
    const { personaTypes } = usePage<IndexProps>().props;

    return (
        <>
            <Head title="Persona Types"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Persona Types</h1>
                    <p className="text-gray-600">List of all persona types</p>
                </div>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Pagination meta={personaTypes} className="mb-4" />

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
                                    Parent ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {personaTypes.data.map((personaType) => (
                                <tr key={personaType.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {personaType.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {personaType.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {personaType.parent?.name || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex space-x-2">
                                            <ShowLink link={route('persona-types.show', personaType.id)} />
                                            <EditLink link={route('persona-types.edit', personaType.id)} />
                                            <DeleteLink link={route('persona-types.destroy', personaType.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination meta={personaTypes} className="my-4" />
                </div>

            </DefaultLayout>
        </>
    );
}
