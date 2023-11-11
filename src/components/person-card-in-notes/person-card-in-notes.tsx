import {
    TasksExtractedInNotes,
    NewTaskFound,
} from '../tasks-extracted-in-notes/tasks-extracted-in-notes';
import {
    PersonCardInList,
    PersonCardInListProps,
} from '../person-card-in-list/person-card-in-list';
import {addDays} from "date-fns"

export const exampleProps: PersonCardInNotesProps = {
    onDismissTask: (t) => console.log(t),
    note_count: 2,
    task_count: 1,
    profilePicture: "https://source.boringavatars.com/beam/64/example?colors=E6E8E3,DEE1E4,DCDEE4,C6CBCD,CDD4D6",
    save_status: 'waiting_for_input',
    name: "Janniboy Wirthi",
    recency_score: 2,
    refreshed: true,
    new_tasks_found: [
        {
            label: 'Feed the cat',
            due_date: addDays(new Date(),-1),
        },
        {
            label: 'Call Kate today',
            due_date: new Date(),
        },
        {
            label: 'Call Kate tomorrow',
            due_date: addDays(new Date(),1),
        },
        {
            label: 'Call Kate in 3 days',
            due_date: addDays(new Date(), 3),
        },
        {
            label: 'In 6 days',
            due_date: addDays(new Date(), 6),
        },
        {
            label: 'In 7 days',
            due_date: addDays(new Date(), 7),
        },
        {
            label: 'In 8 days',
            due_date: addDays(new Date(), 8),
        },
        {
            label: 'In 13 days',
            due_date: addDays(new Date(), 13),
        },
        {
            label: 'In 14 days',
            due_date: addDays(new Date(), 14),
        },

        {
            label: 'In 30 days',
            due_date: addDays(new Date(), 30),
        },

        {
            label: 'In 40 days',
            due_date: addDays(new Date(), 40),
        },

        {
            label: 'In 300 days',
            due_date: addDays(new Date(), 300),
        },
        {
            label: 'Whenever'
        },
    ],
};

export type PersonCardInNotesProps = {new_tasks_found: NewTaskFound[], onDismissTask: OnDismissTask} & PersonCardInListProps;
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '../recency-score-with-tooltip/recency-score-with-tooltip';
import { TasksTooltip, TasksTooltipProps } from '../tasks-tooltip/tasks-tooltip';
import { TaskToday, OnDismissTask } from '../task-today/task-today';

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PersonCardInNotes = ({
    new_tasks_found,
    onDismissTask,
    ...rest
}: PersonCardInNotesProps) => {
    return (
        <div className="rounded-md bg-gray-100">
            <div>
                <PersonCardInList {...rest} />
            </div>
            {new_tasks_found && (
                <div className="p-2">
                    <Tooltip placement="bottom-start">
                        <TooltipTrigger>
                            <TasksExtractedInNotes
                                new_tasks_found={new_tasks_found}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <TasksTooltip tasks={new_tasks_found} onDismiss={onDismissTask}/>
                        </TooltipContent>
                    </Tooltip>
                </div>
            )}
        </div>
    );
};
