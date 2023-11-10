import { createBoard } from '@wixc3/react-board';
import { TaskNoDueLabel } from '../../../components/task-no-due-label/task-no-due-label';

export default createBoard({
    name: 'TaskNoDueLabel',
    Board: () => <TaskNoDueLabel />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
