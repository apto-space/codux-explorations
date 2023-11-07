import { createBoard } from '@wixc3/react-board';
import { AtSignIcon } from '../../../components/at-sign-icon/at-sign-icon';

export default createBoard({
    name: 'AtSignIcon',
    Board: () => <AtSignIcon />,
    isSnippet: true,
});
