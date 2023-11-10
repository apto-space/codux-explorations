import { createBoard } from '@wixc3/react-board';
import { PersonCardInNotes, exampleProps } from '../../../components/person-card-in-notes/person-card-in-notes';

export default createBoard({
    name: 'PersonCardInNotes',
    Board: () => <PersonCardInNotes {...exampleProps} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 468,
        canvasHeight: 114
    }
});
