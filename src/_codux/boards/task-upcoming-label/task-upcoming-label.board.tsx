import { createBoard } from '@wixc3/react-board';
import { TaskUpcomingLabel } from '../../../components/task-upcoming-label/task-upcoming-label';

export default createBoard({
    name: 'TaskUpcomingLabel',
    Board: () => <TaskUpcomingLabel />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
