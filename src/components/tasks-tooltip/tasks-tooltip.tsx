
import { TaskToday } from '../task-today/task-today'; export interface TasksTooltipProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TasksTooltip = ({
    children = 'TasksTooltip',
}: TasksTooltipProps) => {
    return <div className="flex flex-col gap-1.5 p-2 rounded-lg shadow-card">
        <div>
            <TaskToday />
        </div>
        <div>
            <TaskToday />
        </div>
    </div>;
};
