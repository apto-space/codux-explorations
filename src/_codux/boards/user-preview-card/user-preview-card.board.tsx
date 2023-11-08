import { createBoard } from '@wixc3/react-board';
import { UserPreviewCard } from '../../../components/user-preview-card/user-preview-card';

export default createBoard({
    name: 'UserPreviewCard',
    Board: () => <UserPreviewCard
        name="Vicky"
        showHitEnterTo
        profilePicture="https://source.boringavatars.com/beam/64/example?colors=E6E8E3,DEE1E4,DCDEE4,C6CBCD,CDD4D6" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
        canvasWidth: 385
    }
});
