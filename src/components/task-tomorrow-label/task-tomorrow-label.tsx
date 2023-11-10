export interface TaskTomorrowLabelProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskTomorrowLabel = ({
    children = 'TaskTomorrowLabel',
}: TaskTomorrowLabelProps) => {
    return <div className="text-sm bg-orange-100 text-orange-600 w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            Tomorrow
        </div>;
};
