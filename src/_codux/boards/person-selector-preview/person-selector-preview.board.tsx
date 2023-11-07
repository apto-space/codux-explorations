import { createBoard } from '@wixc3/react-board';
import { PersonSelectorPreview } from '../../../components/person-selector-preview/person-selector-preview';

export default createBoard({
    name: 'PersonSelectorPreview',
    Board: () => <PersonSelectorPreview />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 433,
        windowWidth: 375,
        windowHeight: 667
    }
});
