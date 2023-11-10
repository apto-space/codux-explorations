
import { RecencyScore3Label } from '../recency-score-3-label/recency-score-3-label'; export interface RecencyScore1TooltipContentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore1TooltipContent = ({
    children = 'Getting closer',
}: RecencyScore1TooltipContentProps) => {
    return <div className="flex flex-col gap-1.5 p-3 rounded-md w-min whitespace-nowrap bg-white shadow-lg">
        <RecencyScore3Label /><div>You interacted yesterday</div>
    </div>;
};
