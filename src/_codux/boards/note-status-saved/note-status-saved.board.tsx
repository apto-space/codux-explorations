import { createBoard } from '@wixc3/react-board';
import { NoteStatusSaved } from '../../../components/note-status-saved/note-status-saved';

export default createBoard({
    name: 'NoteStatusSaved',
    Board: () => <NoteStatusSaved />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
