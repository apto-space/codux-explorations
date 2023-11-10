import { NoteStatusWithTotal } from '../note-status-with-total/note-status-with-total';
import { RecencyScore } from '../recency-score/recency-score';
import { RecencyScoreWithTooltip } from '../recency-score-with-tooltip/recency-score-with-tooltip';
export interface PersonCardInListProps {
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
    return (
        <div className="flex w-full items-center gap-2  rounded-md bg-gray-100 p-2">
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="grow">
                <div className="flex w-full">
                    <div className="w-full text-left">Jan Wirth</div>

                    <RecencyScoreWithTooltip one_to_three={2} />
                </div>

                <NoteStatusWithTotal />
            </div>
        </div>
    );
};
