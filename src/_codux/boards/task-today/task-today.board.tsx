import { createBoard } from '@wixc3/react-board';
import { TaskToday } from '../../../components/task-today/task-today';

export default createBoard({
    name: 'TaskToday',
    Board: () => <TaskToday />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 341
    }
});
