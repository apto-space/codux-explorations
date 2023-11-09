import { createBoard } from '@wixc3/react-board';
import { NoteStatusWithTotal } from '../../../components/note-status-with-total/note-status-with-total';

export default createBoard({
    name: 'NoteStatusWithTotal',
    Board: () => <NoteStatusWithTotal />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 517
    }
});
