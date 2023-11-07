
import { AtSignIcon } from '../at-sign-icon/at-sign-icon'; export interface SelectAPersonButtonProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SelectAPersonButton = ({
    children = 'SelectAPersonButton',
}: SelectAPersonButtonProps) => {
    return <div className="flex gap-1.5 items-center text-purple-900 text-lg bg-purple-100 p-3 rounded-md">
        <div className="w-8 h-8 flex items-center justify-center bg-purple-300 rounded-md">
            <AtSignIcon />
        </div>
        Select a person<div />
    </div>;
};

