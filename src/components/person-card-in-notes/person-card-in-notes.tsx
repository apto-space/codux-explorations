
import { TasksExtractedInNotes } from '../tasks-extracted-in-notes/tasks-extracted-in-notes';
import { PersonCardInList } from '../person-card-in-list/person-card-in-list'; export interface PersonCardInNotesProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonCardInNotes = ({
    children = 'PersonCardInNotes',
}: PersonCardInNotesProps) => {
    return <div className="bg-gray-100 rounded-md">
        <div>
            <PersonCardInList />
        </div>
        <div className="p-2">
            <TasksExtractedInNotes />
        </div>
        </div>;
};
