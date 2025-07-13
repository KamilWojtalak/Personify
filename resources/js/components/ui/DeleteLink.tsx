import { Link } from "@inertiajs/react";

type DeleteLinkProps = {
    link: string;
};

export default function DeleteLink({ link }: DeleteLinkProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (!confirm('Are you sure you want to delete this item?')) {
            e.preventDefault();
        }
    };

    return (
        <Link
            href={link}
            method="delete"
            className="cursor-pointer"
            onClick={handleClick}
        >
            🔥
        </Link>
    )
}
