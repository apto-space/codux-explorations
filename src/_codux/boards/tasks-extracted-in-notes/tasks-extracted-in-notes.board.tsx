import { createBoard } from '@wixc3/react-board';
import { TasksExtractedInNotes } from '../../../components/tasks-extracted-in-notes/tasks-extracted-in-notes';

export default createBoard({
    name: 'TasksExtractedInNotes',
    Board: () => <TasksExtractedInNotes />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 259
    }
});
