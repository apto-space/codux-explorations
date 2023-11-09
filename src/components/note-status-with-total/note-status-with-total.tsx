
import { NoteStatusWaitingForInput } from '../note-status-waiting-for-input/note-status-waiting-for-input'; export interface NoteStatusWithTotalProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoteStatusWithTotal = ({
    children = '1 note • 0 tasks',
}: NoteStatusWithTotalProps) => {
    return <div className="text-center w-full flex gap-3">
        <NoteStatusWaitingForInput />
        <div className="text-gray-400">1 note • 0 tasks</div></div>;
};
