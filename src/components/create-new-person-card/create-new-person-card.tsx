
import { HitEnterTo } from '../hit-enter-to/hit-enter-to'; export interface CreateNewPersonCardProps {
    className?: string;
    name: string;
    showHitEnterTo?: boolean
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreateNewPersonCard = ({
    name = 'Jan Wirth',
    showHitEnterTo = false

}: CreateNewPersonCardProps) => {
    return <div className="flex items-center gap-1.5 w-full h-12 bg-purple-100 text-purple-900 rounded-lg p-2">
        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg bg-purple-300">+</div>
        <div className="grow w-0 whitespace-nowrap overflow-hidden text-ellipsis mr-0.5">{name}</div>
        {showHitEnterTo && <div className="opacity-70"><HitEnterTo> to select </HitEnterTo></div>}
    </div>;
};
