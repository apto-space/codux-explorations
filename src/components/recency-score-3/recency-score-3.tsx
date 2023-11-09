export interface RecencyScore3Props {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore3 = ({
    children = 'RecencyScore3',
}: RecencyScore3Props) => {
    return <div className="flex justify-center align-center w-12 gap-1 bg-green-100 p-2 rounded-full">
        <div className="bg-green-600 rounded-full w-2 h-2"/>
        <div className="bg-green-600 rounded-full w-2 h-2"/>
        <div className="bg-green-600 rounded-full w-2 h-2"/>
    </div>;
};
