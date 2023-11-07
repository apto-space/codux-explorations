import { createBoard } from '@wixc3/react-board';
import { CreateNewPersonCard } from '../../../components/create-new-person-card/create-new-person-card';

export default createBoard({
    name: 'CreateNewPersonCard',
    Board: () => <CreateNewPersonCard showHitEnterTo={true} name={"Andy"} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 48,
        canvasWidth: 226,
        windowWidth: 375,
        windowHeight: 667
    }
});
