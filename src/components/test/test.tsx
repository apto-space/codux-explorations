
import { HitEnterTo } from '../hit-enter-to/hit-enter-to'; export interface TestProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test = ({
    children = 'Test',
}: TestProps) => {
    return <div className="text-center p-2 bg-gray-100">
        <HitEnterTo /></div>;
};
