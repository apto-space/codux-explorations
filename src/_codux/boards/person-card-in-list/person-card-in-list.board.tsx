import { createBoard } from '@wixc3/react-board';
import { PersonCardInList } from '../../../components/person-card-in-list/person-card-in-list';
import { RecencyScore } from '../../../components/recency-score/recency-score';

export default createBoard({
    name: 'PersonCardInList',
    Board: () => <PersonCardInList></PersonCardInList>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 395
    }
});
