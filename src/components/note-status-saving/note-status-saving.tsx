export interface NoteStatusSavingProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoteStatusSaving = ({
    children = 'Saving',
}: NoteStatusSavingProps) => {
    return <div className="flex items-center gap-1 text-purple-900">
        <svg <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_12033_35026)">
<circle cx="7" cy="7" r="6" stroke="#DDE2FF" strokeWidth="1.5"/>
<path d="M13 7C13 3.68629 10.3137 1 7 1" stroke="#3252FF" strokeWidth="1.5"/>
</g>
<defs>
<clipPath id="clip0_12033_35026">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
        {children}</div>;
};
