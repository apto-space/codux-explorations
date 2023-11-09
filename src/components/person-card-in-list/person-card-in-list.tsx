
import { NoteStatusWithTotal } from '../note-status-with-total/note-status-with-total'; export interface PersonCardInListProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonCardInList = ({
    children = 'PersonCardInList',
}: PersonCardInListProps) => {
    return <div className="flex items-center gap-2 w-full p-2 rounded-md bg-gray-100">
        <div>
            <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full w-10 h-10"></div></div></div>
        <div>Jan Wirth
            <NoteStatusWithTotal />
        </div>
    </div>;
};
