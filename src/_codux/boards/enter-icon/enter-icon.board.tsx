import { createBoard } from '@wixc3/react-board';
import { EnterIcon } from '../../../components/enter-icon/enter-icon';

export default createBoard({
    name: 'EnterIcon',
    Board: () => <EnterIcon />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
