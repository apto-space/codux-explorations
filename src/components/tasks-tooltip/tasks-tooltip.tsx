
import { TaskToday as Task, NewTaskFound, OnDismissTask } from '../task-today/task-today';
import { TasksExtractedInNotes, TasksExtractedInNotesProps } from '../tasks-extracted-in-notes/tasks-extracted-in-notes';
export interface TasksTooltipProps {
    tasks: NewTaskFound[];
    onDismiss: OnDismissTask
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TasksTooltip = ({
    tasks,
    onDismiss
}: TasksTooltipProps) => {
    return <div className="flex flex-col gap-1.5 p-2 rounded-lg shadow-card bg-white">
        {tasks.map(task => <Task onDismiss={onDismiss} key={task.label} task={task}/>)}
    </div>;
};
