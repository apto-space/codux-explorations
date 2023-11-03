import { createBoard } from '@wixc3/react-board';
import { ProfileInfo } from '../../../components/profile-info/profile-info';

export default createBoard({
    name: 'ProfileInfo',
    Board: () => <ProfileInfo />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667
    }
});
