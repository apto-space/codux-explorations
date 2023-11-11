export interface RecencyScore3LabelProps {
    text?: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScore3Label = ({
    text = 'Getting Closer',
}: RecencyScore3LabelProps) => {
    return <div className="bg-green-50 text-green-600 w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            {text}
        </div>;
};
