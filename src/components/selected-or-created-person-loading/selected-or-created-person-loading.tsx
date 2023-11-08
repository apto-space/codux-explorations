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
    return <div className="text-center flex w-full h-2">
        <div />
        {children}</div>;
};
