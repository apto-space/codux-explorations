import { createBoard } from '@wixc3/react-board';
import { TaskTodayLabel } from '../../../components/task-today-label/task-today-label';

export default createBoard({
    name: 'TaskTodayLabel',
    Board: () => <TaskTodayLabel />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
