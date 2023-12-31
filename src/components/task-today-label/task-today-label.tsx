export interface TaskTodayLabelProps {
    text?: string
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskTodayLabel = ({
    text,
}: TaskTodayLabelProps) => {
    return <div className="bg-red-50 text-red-600 text-sm w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            {text || "Today"}
        </div>;
};
