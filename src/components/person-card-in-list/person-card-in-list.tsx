import { NoteStatusWithTotal, NoteStatusWithTotalProps } from '../note-status-with-total/note-status-with-total';
import { RecencyScore } from '../recency-score/recency-score';
import { RecencyScoreWithTooltip, RecencyScoreWithTooltipProps } from '../recency-score-with-tooltip/recency-score-with-tooltip';
export type SaveStatus = 'wating_for_input' | 'saving' | 'saved' | 'no_status';
export type PersonCardInListProps = NoteStatusWithTotalProps & {name: string, profilePicture: string} & RecencyScoreWithTooltipProps

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonCardInList = ({name, recency_score, profilePicture, refreshed,
    ...rest
}: PersonCardInListProps) => {
    return (
        <button onClick={() => console.log('outer')} className="flex w-full items-center gap-2  rounded-md bg-gray-100 p-2">
            <img src={profilePicture} className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-gray-200"></img>
            <div className="grow">
                <div className="flex w-full">
                    <div className="w-full text-left">{name}</div>

                    <RecencyScoreWithTooltip refreshed={refreshed} recency_score={recency_score} />
                </div>

                <NoteStatusWithTotal {...rest}/>
            </div>
        </button>
    );
};
