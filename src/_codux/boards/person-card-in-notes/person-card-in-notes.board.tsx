import { createBoard } from '@wixc3/react-board';
import { PersonCardInNotes } from '../../../components/person-card-in-notes/person-card-in-notes';

export default createBoard({
    name: 'PersonCardInNotes',
    Board: () => <PersonCardInNotes />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 468,
        canvasHeight: 114
    }
});
