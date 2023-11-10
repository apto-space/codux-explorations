import { createBoard } from '@wixc3/react-board';
import { RecencyScoreWithTooltip } from '../../../components/recency-score-with-tooltip/recency-score-with-tooltip';

export default createBoard({
    name: 'RecencyScoreWithTooltip',
    Board: () => <RecencyScoreWithTooltip one_to_three={2} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 254,
        canvasHeight: 90
    }
});
