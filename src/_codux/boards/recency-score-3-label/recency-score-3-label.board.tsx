import { createBoard } from '@wixc3/react-board';
import { RecencyScore3Label } from '../../../components/recency-score-3-label/recency-score-3-label';

export default createBoard({
    name: 'RecencyScore3Label',
    Board: () => <RecencyScore3Label />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 221
    }
});
