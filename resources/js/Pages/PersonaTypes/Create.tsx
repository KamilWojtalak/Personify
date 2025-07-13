import DefaultLayout from "@/layouts/default-layout";
import { SharedData } from "@/types";
import { Head, usePage, useForm } from "@inertiajs/react";
import { useState } from "react";

interface PersonaType {
    id: number;
    name: string;
}

interface FormData {
    name: string;
    description: string;
    parent_id?: string | undefined;
}

export default function Create() {
    const { auth } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<PersonaType[]>([]);
    const [showSearch, setShowSearch] = useState(false);

    const { data, setData, post, processing, errors } = useForm<FormData>({
        name: "",
        description: "",
        parent_id: "",
    });

    const handleSearch = async (term: string) => {
        setSearchTerm(term);
        if (term.length > 2) {
            try {
                const response = await fetch(`/persona-types/search?q=${term}`);
                const results = await response.json();

                setSearchResults(results);
                setShowSearch(true);
            } catch (error) {
                console.error("Search failed:", error);
            }
        } else {
            setSearchResults([]);
            setShowSearch(false);
        }
    };

    const selectParent = (parent: PersonaType) => {
        setData("parent_id", parent.id.toString());
        setSearchTerm(parent.name);
        setShowSearch(false);
    };

    const clearParent = () => {
        setData("parent_id", "");
        setSearchTerm("");
        setShowSearch(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("persona-types.store"));
    };

    return (
        <>
            <Head title="Create Persona Type"></Head>

            <DefaultLayout>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Persona Type</h1>
                    <p className="text-gray-600">Define a new persona type with optional parent relationship</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Description
                    </label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="parent" className="block text-sm font-medium mb-2">
                            Parent Persona Type
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="parent"
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search for parent persona type..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                            />
                            {data.parent_id && (
                                <button
                                    type="button"
                                    onClick={clearParent}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    🔥
                                </button>
                            )}
                        </div>
                        {showSearch && searchResults.length > 0 && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
                                {searchResults.map((result) => (
                                    <div
                                        key={result.id}
                                        onClick={() => selectParent(result)}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {result.name}
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors.parent_id && <p className="text-red-500 text-sm mt-1">{errors.parent_id}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
                    >
                        {processing ? "Creating..." : "Create Persona Type"}
                    </button>
                </form>
            </DefaultLayout>
        </>
    );
}
