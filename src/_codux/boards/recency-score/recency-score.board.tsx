import { createBoard } from '@wixc3/react-board';
import { RecencyScore } from '../../../components/recency-score/recency-score';

export default createBoard({
    name: 'RecencyScore',
    Board: () => <RecencyScore one_to_three={3} animate />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 700,
        windowWidth: 375,
        windowHeight: 667
    }
});
