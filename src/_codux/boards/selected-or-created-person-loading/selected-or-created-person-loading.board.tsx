import { createBoard } from '@wixc3/react-board';
import { SelectedOrCreatedPersonLoading } from '../../../components/selected-or-created-person-loading/selected-or-created-person-loading';

export default createBoard({
    name: 'SelectedOrCreatedPersonLoading',
    Board: () => <SelectedOrCreatedPersonLoading/>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 483,
        canvasHeight: 24
    }
});
