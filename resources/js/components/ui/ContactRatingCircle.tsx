import { Rating } from '@/types';

interface Contact {
    rating: Rating;
}

type Props = {
    contact: Contact;
};

export default function ContactRatingCircle({ contact }: Props) {
    return (
        <div className={`h-3 w-3 rounded-full ${(() => {
            switch (contact.rating) {
                case 'GOOD':
                    return 'bg-green-500';
                case 'AVERAGE':
                    return 'bg-slate-300';
                case 'POOR':
                    return 'bg-red-500';
                default:
                    return 'bg-slate-300';
            }
        })()} `} title={contact.rating}></div>
    )
}
