import { RecencyScore3Label } from '../recency-score-3-label/recency-score-3-label';
import { RecencyScore2Label } from '../recency-score-2-label/recency-score-2-label';
import { RecencyScore1Label } from '../recency-score-1-label/recency-score-1-label';
export interface RecencyScore1TooltipContentProps {
    score: number;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const RecencyScore1TooltipContent = ({
    score,
}: RecencyScore1TooltipContentProps) => {
    return (
        <div className="flex w-min flex-col gap-1.5 whitespace-nowrap rounded-md bg-white p-3 shadow-card">
            {score==1&&<RecencyScore1Label />}  
            {score==2&&<RecencyScore2Label />}
            {score==3&&<RecencyScore3Label />}
            {score==3&&<div>You interacted recently</div>}
            {score==2&&<div>You haven’t talked for more than a month</div>}
            {score==1&&<div>You haven’t talked for more than 3 months</div>}
        </div>
    );
};
