import { createBoard } from '@wixc3/react-board';
import { RecencyScore3 } from '../../../components/recency-score-3/recency-score-3';

export default createBoard({
    name: 'RecencyScore3',
    Board: () => <RecencyScore3 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 176,
        canvasHeight: 192
    }
});
