
import { HitEnterTo } from '../hit-enter-to/hit-enter-to'; export interface UserPreviewCardProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserPreviewCard = ({
    children = 'Jan Wirth',
}: UserPreviewCardProps) => {
    return <div className="flex items-center gap-1 w-full h-12 bg-gray-100 text-black rounded-lg p-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-purple-300"></div>
        <div className="grow w-0 whitespace-nowrap overflow-hidden text-ellipsis mr-1">{children}</div>
        <div className="opacity-40"><HitEnterTo /></div>
    </div>;
};
