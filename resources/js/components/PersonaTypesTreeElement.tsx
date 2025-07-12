import { PersonaType } from '@/types';
import ShowLink from './ui/ShowLink';

type PersonaTypesTreeElementProps = {
    personaType: PersonaType;
    isTopRow?: boolean;
};

export default function PersonaTypesTreeElement({ personaType, isTopRow = false, ...props }: PersonaTypesTreeElementProps) {
    return (
        <li className="tree-item" {...props}>
            <div className={`flex items-center ${!isTopRow ? 'justify-between rounded-md p-1' : ''}`}>
                {isTopRow && (
                    <svg className="mr-2 h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                )}
                <div className={`flex justify-between items-center w-full`}>
                    <span className={`${isTopRow ? 'font-semibold' : ''}`}>{personaType.name}</span>{' '}
                    <div className="tree-item-actions">
                        <ShowLink link={route('persona-types.show', personaType.id)} style={{ marginLeft: '5px', display: 'inline-block' }} />
                    </div>
                </div>
            </div>
        </li>
    );
}
