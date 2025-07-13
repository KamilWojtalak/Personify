import { Paginate } from "@/types";

interface Props<T> {
  meta: Paginate<T>;
}

export function Pagination<T>({ meta, ...props }: Props<T>) {
  return (
        <>
            {meta.links && meta.links.length > 1 && (
                <div {...props} className={`pagination-container mt-8 flex justify-center ${props.className || ''}`}>
                    <nav className="flex items-center space-x-2">
                        {meta.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url || '#'}
                                className={`rounded px-3 py-2 ${
                                    link.active
                                        ? 'bg-blue-500 text-white'
                                        : link.url
                                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                          : 'cursor-not-allowed bg-gray-100 text-gray-400'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
