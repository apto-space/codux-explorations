import { createBoard } from '@wixc3/react-board';
import { RecencyScoreWithTooltip } from '../../../components/recency-score-with-tooltip/recency-score-with-tooltip';

export default createBoard({
    name: 'RecencyScoreWithTooltip',
    Board: () => <RecencyScoreWithTooltip one_to_three={2} />,
    isSnippet: true,
});
