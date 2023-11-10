import { createBoard } from '@wixc3/react-board';
import { RecencyScore2Label } from '../../../components/recency-score-2-label/recency-score-2-label';

export default createBoard({
    name: 'RecencyScore2Label',
    Board: () => <RecencyScore2Label />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 166
    }
});
