
import { TaskTodayLabel } from '../task-today-label/task-today-label'; export interface TaskTodayProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskToday = ({
    children = 'TaskToday',
}: TaskTodayProps) => {
    return <div className="flex text-left items-center gap-2 w-full p-2 bg-gray-50 rounded-lg">
        <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
            Note text</div>
        <div />
        <TaskTodayLabel />
        <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.59961 4.39941H13.4008" stroke="#A1A4AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2017 4.39941V12.8004C12.2017 13.4004 11.6017 14.0005 11.0016 14.0005H5.00092C4.40085 14.0005 3.80078 13.4004 3.80078 12.8004V4.39941" stroke="#A1A4AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.59961 4.39832V3.19818C5.59961 2.59812 6.19968 1.99805 6.79975 1.99805H9.20002C9.80009 1.99805 10.4002 2.59812 10.4002 3.19818V4.39832" stroke="#A1A4AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.80078 7.40039V11.0008" stroke="#A1A4AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.20117 7.40039V11.0008" stroke="#A1A4AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div></div>;
};
