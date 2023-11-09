import { createBoard } from '@wixc3/react-board';
import { NoteStatusWaitingForInput } from '../../../components/note-status-waiting-for-input/note-status-waiting-for-input';

export default createBoard({
    name: 'NoteStatusWaitingForInput',
    Board: () => <NoteStatusWaitingForInput />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasHeight: 24
    }
});
