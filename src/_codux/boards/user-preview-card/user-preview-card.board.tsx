import { createBoard } from '@wixc3/react-board';
import { UserPreviewCard } from '../../../components/user-preview-card/user-preview-card';

export default createBoard({
    name: 'UserPreviewCard',
    Board: () => <UserPreviewCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 345
    }
});
