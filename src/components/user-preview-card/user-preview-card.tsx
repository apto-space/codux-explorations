
import { HitEnterTo } from '../hit-enter-to/hit-enter-to'; export interface UserPreviewCardProps {
    className?: string;
    name: string;
    profilePicture: string;
    showHitEnterTo?: boolean
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserPreviewCard = ({
    name = 'Jan Wirth',
    profilePicture,
    showHitEnterTo = false

}: UserPreviewCardProps) => {
    return <div className="flex items-center gap-1.5 w-full h-12 bg-gray-100 text-black rounded-lg p-2">
        <img src={profilePicture} className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-purple-300"></img>
        <div className="grow w-0 whitespace-nowrap overflow-hidden text-ellipsis mr-0.5">{name}</div>
        {showHitEnterTo && <div className="opacity-40"><HitEnterTo> to select </HitEnterTo></div>}
    </div>;
};
