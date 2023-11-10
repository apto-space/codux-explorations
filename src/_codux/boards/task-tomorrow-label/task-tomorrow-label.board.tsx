import { createBoard } from '@wixc3/react-board';
import { TaskTomorrowLabel } from '../../../components/task-tomorrow-label/task-tomorrow-label';

export default createBoard({
    name: 'TaskTomorrowLabel',
    Board: () => <TaskTomorrowLabel />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
