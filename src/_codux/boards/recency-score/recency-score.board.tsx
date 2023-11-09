import { createBoard } from '@wixc3/react-board';
import { RecencyScore } from '../../../components/recency-score/recency-score';
import {useState} from "react"

export default createBoard({
    name: 'RecencyScore',
    Board: () => {
        const [refreshed, setScore] = useState(false)

        return <div>
            <button onClick={() => setScore(true)}>refresh</button>
            <button onClick={() => setScore(false)}>reset</button>
            <RecencyScore one_to_three={1} refreshed={refreshed} />
            </div>
        },
    isSnippet: true,
    environmentProps: {
        canvasWidth: 700,
        windowWidth: 375,
        windowHeight: 667
    }
});
