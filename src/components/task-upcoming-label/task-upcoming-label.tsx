export interface TaskUpcomingLabelProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskUpcomingLabel = ({
    children = 'TaskUpcomingLabel',
}: TaskUpcomingLabelProps) => {
    return <div className="text-sm bg-blue-50 text-blue-600 w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            25 Nov
        </div>;
};
