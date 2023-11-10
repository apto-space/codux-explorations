import { createBoard } from '@wixc3/react-board';
import { RecencyScore1TooltipContent } from '../../../components/recency-score-1-tooltip-content/recency-score-1-tooltip-content';

export default createBoard({
    name: 'RecencyScore1TooltipContent',
    Board: () => <RecencyScore1TooltipContent />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 283,
        canvasHeight: 280
    }
});
