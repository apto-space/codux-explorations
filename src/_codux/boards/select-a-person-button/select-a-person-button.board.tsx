import { createBoard } from '@wixc3/react-board';
import { SelectAPersonButton } from '../../../components/select-a-person-button/select-a-person-button';

export default createBoard({
    name: 'SelectAPersonButton',
    Board: () => <SelectAPersonButton />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 339
    }
});
