export interface RecencyScore1TooltipContentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore1TooltipContent = ({
    children = 'Getting closer',
}: RecencyScore1TooltipContentProps) => {
    return <div className="p-2 rounded-md inline-block bg-white shadow-lg ">
        <div className="align-middle bg-green-50 text-green-600 items-center inline-block pl-2 pr-2 rounded-md mb-1">
            Getting closer
        </div><div>You interacted yesterday</div>
    </div>;
};
