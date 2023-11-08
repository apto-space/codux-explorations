import { createBoard } from '@wixc3/react-board';
import { SelectedOrCreatedPersonLoading } from '../../../components/selected-or-created-person-loading/selected-or-created-person-loading';

export default createBoard({
    name: 'SelectedOrCreatedPersonLoading',
    Board: () => <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-2 w-full">
        <div className="bg-gray-200 rounded-full w-8 h-8" />
        <div className="bg-gray-200 w-20 h-4 rounded-full"></div>
    </div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 430,
        canvasHeight: 24
    }
});
