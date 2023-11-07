export interface PersonSelectorPreviewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonSelectorPreview = ({
    children = 'Jan Wirth',
}: PersonSelectorPreviewProps) => {
    return <div className="flex items-center gap-2 p-3 m-3 bg-gray-100 rounded-md">
        <div className="bg-gray-200 w-12 h-12 rounded-full"></div>
        <div>
            {children}
            <div className="text-gray-400">
                CTO at Apto
            </div></div></div>;
};
