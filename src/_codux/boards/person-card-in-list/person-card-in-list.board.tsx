import { createBoard } from '@wixc3/react-board';
import { PersonCardInList } from '../../../components/person-card-in-list/person-card-in-list';

export default createBoard({
    name: 'PersonCardInList',
    Board: () => <PersonCardInList />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 347
    }
});
