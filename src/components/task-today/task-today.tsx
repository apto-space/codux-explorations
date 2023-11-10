import { TaskTodayLabel } from '../task-today-label/task-today-label';
import { TaskTomorrowLabel } from '../task-tomorrow-label/task-tomorrow-label';
import { TaskUpcomingLabel } from '../task-upcoming-label/task-upcoming-label';
import { TaskNoDueLabel } from '../task-no-due-label/task-no-due-label';
export interface TaskTodayProps {
    task: NewTaskFound;
    onDismiss: OnDismissTask
}
export type OnDismissTask = (task: NewTaskFound) => void

export type NewTaskFound = { due_date?: Date; label: string };

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */


import {isTomorrow, isToday, isBefore, startOfDay} from "date-fns"

export const TaskToday = ({ task, onDismiss }: TaskTodayProps) => {
    const Label = (date: Date) => {
        if (isBefore(date, startOfDay(new Date()))) {
            return <TaskTodayLabel text="Overdue"/>
        } else if (isToday(date) ) {
            return <TaskTodayLabel/>
        } else if (isTomorrow(date)) {
            return <TaskTomorrowLabel />

        } else {
            return <TaskUpcomingLabel date={date} />
        }

    }
    return (
        <div className="flex w-full items-center gap-2 rounded-lg bg-gray-50 pl-3 text-left">
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {task.label}
            </div>
            <div />
            {task.due_date ? Label(task.due_date)
             : <TaskNoDueLabel />}


            <button className="p-3" onClick={() => onDismiss(task)}>
                {trashIcon}

            </button>
        </div>
    );
};

const trashIcon = <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M2.59961 4.39941H13.4008"
        stroke="#A1A4AE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M12.2017 4.39941V12.8004C12.2017 13.4004 11.6017 14.0005 11.0016 14.0005H5.00092C4.40085 14.0005 3.80078 13.4004 3.80078 12.8004V4.39941"
        stroke="#A1A4AE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M5.59961 4.39832V3.19818C5.59961 2.59812 6.19968 1.99805 6.79975 1.99805H9.20002C9.80009 1.99805 10.4002 2.59812 10.4002 3.19818V4.39832"
        stroke="#A1A4AE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M6.80078 7.40039V11.0008"
        stroke="#A1A4AE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M9.20117 7.40039V11.0008"
        stroke="#A1A4AE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>