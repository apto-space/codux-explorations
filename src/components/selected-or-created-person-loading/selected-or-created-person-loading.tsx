export interface SelectedOrCreatedPersonLoadingProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SelectedOrCreatedPersonLoading = ({
    children = 'Jan Wirth',
}: SelectedOrCreatedPersonLoadingProps) => {
    return <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg p-2 w-full">
        <div className="animate-pulse bg-gray-200 rounded-full w-8 h-8" />
        <div className="animate-pulse bg-gray-200 w-20 h-4 rounded-full"></div>
    </div>;
};
