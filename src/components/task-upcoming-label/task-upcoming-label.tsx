export interface TaskUpcomingLabelProps {
    date: Date
}
import {format, differenceInDays, differenceInWeeks, isSameYear} from 'date-fns'

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TaskUpcomingLabel = ({
    date,
}: TaskUpcomingLabelProps) => {
    let formatted = format(date, "d MMM YYY")
    if (isSameYear(date, new Date())) {
        formatted = format(date, "d MMM")
        
    }
    // if (differenceInWeeks(new Date(), date) == 0) {
    //     formatted = format(date, "E")

    // }
    const daysInFuture = differenceInDays(date, new Date()) + 1
    if (daysInFuture < 30) {
        formatted = format(date, "EEE, d MMM")
    }

    if (daysInFuture < 8) {
        formatted = format(date, "EEEE")
    }
    
    
    return <div className="text-sm bg-blue-50 text-blue-600 w-min whitespace-nowrap pl-2 pr-2 rounded-md">
            {formatted}
        </div>;
};
