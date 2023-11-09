import { createBoard } from '@wixc3/react-board';
import { NoteStatusSaving } from '../../../components/note-status-saving/note-status-saving';

export default createBoard({
    name: 'NoteStatusSaving',
    Board: () => <NoteStatusSaving />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
