import { RecencyScore3Label } from '../recency-score-3-label/recency-score-3-label';
import { RecencyScore2Label } from '../recency-score-2-label/recency-score-2-label';
import { RecencyScore1Label } from '../recency-score-1-label/recency-score-1-label';
export interface RecencyScore1TooltipContentProps {
    recency_score: number;
    refreshed?: boolean;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const RecencyScore1TooltipContent = ({
    recency_score: recency_score_,
    refreshed,
}: RecencyScore1TooltipContentProps) => {
    const recency_score = refreshed ? 3 : recency_score_
    return (
        <div className="flex w-min flex-col gap-1.5 whitespace-nowrap rounded-md bg-white p-3 shadow-card">
            {recency_score == 1 && <RecencyScore1Label />}
            {recency_score == 2 && <RecencyScore2Label />}
            {recency_score == 3 && <RecencyScore3Label />}
            {recency_score == 3 && (refreshed ? <div>You interacted just now</div>:  <div>You interacted recently</div>)}
            {recency_score == 2 && (
                <div>You haven&lsquo;t talked for more than a month</div>
            )}
            {recency_score == 1 && (
                <div>You haven&lsquo;t talked for more than 3 months</div>
            )}
        </div>
    );
};
