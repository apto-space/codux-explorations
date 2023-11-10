import { createBoard } from '@wixc3/react-board';
import { TasksTooltip } from '../../../components/tasks-tooltip/tasks-tooltip';

export default createBoard({
    name: 'TasksTooltip',
    Board: () => <TasksTooltip />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 303
    }
});
