export interface NoteStatusWaitingForInputProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoteStatusWaitingForInput = ({
    children = 'Waiting for input',
}: NoteStatusWaitingForInputProps) => {
    return <div className="flex items-center text-purple-900 gap-0  animate-pulse">
        <div />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12033_35003)">
                <path d="M7 1.16602V3.49935" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 10.5V12.8333" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.875 2.875L4.52583 4.52583" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.47266 9.47266L11.1235 11.1235" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.16602 7H3.49935" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 7H12.8333" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.875 11.1235L4.52583 9.47266" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.47266 4.52583L11.1235 2.875" stroke="#3252FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_12033_35003">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <div className="pl-1">
            Waiting for input</div></div>;
};
