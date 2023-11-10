export interface TaskNoDueLabelProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskNoDueLabel = ({
    children = 'TaskNoDueLabel',
}: TaskNoDueLabelProps) => {
    return <div className="bg-gray-100 text-gray-500 w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            No due
        </div>;
};
