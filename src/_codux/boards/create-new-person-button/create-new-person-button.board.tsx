import { createBoard } from '@wixc3/react-board';
import { CreateNewPersonButton } from '../../../components/create-new-person-button/create-new-person-button';

export default createBoard({
    name: 'CreateNewPersonButton',
    Board: () => <CreateNewPersonButton />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 345
    }
});
