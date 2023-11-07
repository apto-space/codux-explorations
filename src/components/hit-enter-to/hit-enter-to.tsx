
import { EnterIcon } from '../enter-icon/enter-icon'; export interface HitEnterToProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HitEnterTo = ({
    children = 'to add',
}: HitEnterToProps) => {
    return <div className="flex gap-1.5 opacity-100">Hit
            <div
             style={{backgroundColor: "color-mix(in srgb, currentColor 15%, transparent)"}}
             className="bg-opacity-20 w-6 h-6 rounded-lg items-center justify-center flex">
                <EnterIcon />
            </div>
            {children}</div>;
};
