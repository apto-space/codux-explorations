
import { NoteStatusSaved } from '../note-status-saved/note-status-saved';
import { NoteStatusSaving } from '../note-status-saving/note-status-saving';
import { NoteStatusWaitingForInput } from '../note-status-waiting-for-input/note-status-waiting-for-input';
export interface NoteStatusWithTotalProps {
    note_count: number;
    task_count: number;
    save_status?: SaveStatus;
}

export type SaveStatus = 'waiting_for_input' | 'saving' | 'saved' | 'saving_failed';
/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const NoteStatusWithTotal = ({
    note_count,
    task_count,
    save_status,
}: NoteStatusWithTotalProps) => {
    return (
        <div className="flex gap-3">
            {save_status == 'saved' && <NoteStatusSaved />}
            {save_status == 'saving' && <NoteStatusSaving />}
            {save_status == 'waiting_for_input' && <NoteStatusWaitingForInput />}
            <div className="text-gray-400">
                {note_count || 'No'} note{note_count == 1 ? '' : 's'} •{' '}
                {task_count || 'No'} task{task_count == 1 ? '' : 's'}
            </div>
        </div>
    );
};
