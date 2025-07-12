import { Contact } from '@/types';

type ContactRatingCircleProps = {
    contact: Contact;
};

export default function ContactRatingCircle({ contact }: ContactRatingCircleProps) {
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
