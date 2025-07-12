import { PersonaType } from '@/types';
import PersonaTypesTreeElement from './PersonaTypesTreeElement';

type PersonaTypesTreeProps = {
    personaTypes: PersonaType[];
};

const hasChildren = (personaType: PersonaType): boolean => {
    return !!(personaType.children && personaType.children.length > 0);
};

// TODO: add expand/collapse functionality
export default function PersonaTypesTree({ personaTypes, ...props }: PersonaTypesTreeProps) {
    return (
        <ul {...props}>
            {personaTypes.map((personaType) => (
                <>
                    <PersonaTypesTreeElement key={personaType.id} personaType={personaType} isTopRow={true} />
                    {hasChildren(personaType) && (
                        <ul>
                            {personaType.children && personaType.children.map((child) => (
                                <PersonaTypesTreeElement key={child.id} personaType={child} />
                            ))}
                        </ul>
                    )}
                </>
            ))}
        </ul>
    );
}
