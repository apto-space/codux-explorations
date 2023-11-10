import { createBoard } from '@wixc3/react-board';
import { RecencyScore1Label } from '../../../components/recency-score-1-label/recency-score-1-label';

export default createBoard({
    name: 'RecencyScore1Label',
    Board: () => <RecencyScore1Label />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
