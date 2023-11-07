export interface CreateNewPersonButtonProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreateNewPersonButton = ({
    children = 'Jan Wirth',
}: CreateNewPersonButtonProps) => {
    return <div className="text-center flex items-center gap-1 w-full h-12 bg-gray-100 text-black rounded-lg p-1.5">
        <div />
        <div><div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-purple-300"></div></div>
        <div></div>
        {children}</div>;
};
