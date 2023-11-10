import { TasksExtractedInNotes } from '../tasks-extracted-in-notes/tasks-extracted-in-notes';
import { PersonCardInList } from '../person-card-in-list/person-card-in-list';
export interface PersonCardInNotesProps {
    className?: string;
    children?: React.ReactNode;
}
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '../recency-score-with-tooltip/recency-score-with-tooltip';
import { TasksTooltip } from '../tasks-tooltip/tasks-tooltip';

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonCardInNotes = ({
    children = 'PersonCardInNotes',
}: PersonCardInNotesProps) => {
    return (
        <div className="rounded-md bg-gray-100">
            <div>
                <PersonCardInList />
            </div>
            <div className="p-2">
                <Tooltip placement="bottom-start">
                    <TooltipTrigger>
                        <div></div>
                        <TasksExtractedInNotes />
                    </TooltipTrigger>
                    <TooltipContent>
            <TasksTooltip />
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
};
