import { createBoard } from '@wixc3/react-board';
import { HitEnterTo } from '../../../components/hit-enter-to/hit-enter-to';

export default createBoard({
    name: 'HitEnterTo',
    Board: () => <HitEnterTo />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
