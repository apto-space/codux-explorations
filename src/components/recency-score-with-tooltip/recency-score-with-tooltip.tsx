export interface RecencyScoreWithTooltipProps {
    // className?: string;
    // children?: React.ReactNode;
    one_to_three: number;
    refreshed?: boolean;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RecencyScoreWithTooltip = ({
    one_to_three, refreshed,
}: RecencyScoreWithTooltipProps) => {
    return <div>
        <Tooltip>
            <TooltipTrigger>
                <RecencyScore one_to_three={one_to_three} refreshed={refreshed} />
            </TooltipTrigger>
            <TooltipContent>
                <RecencyScore1TooltipContent score={one_to_three}/>

            </TooltipContent></Tooltip>
    </div>;
};

import * as React from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useClick,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    useMergeRefs,
    FloatingPortal
} from "@floating-ui/react";
import type { Placement } from "@floating-ui/react";
import { RecencyScore } from '../recency-score/recency-score';
import { RecencyScore1TooltipContent } from '../recency-score-1-tooltip-content/recency-score-1-tooltip-content';

interface TooltipOptions {
    initialOpen?: boolean;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function useTooltip({
    initialOpen = false,
    placement = "top",
    open: controlledOpen,
    onOpenChange: setControlledOpen
}: TooltipOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 5
            }),
            shift({ padding: 5 })
        ]
    });

    const context = data.context;

    const hover = useClick(context, {
        // move: false,

        enabled: controlledOpen == null });
    const focus = useFocus(context, {
        enabled: controlledOpen == null
    });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    const interactions = useInteractions([hover, focus, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data
        }),
        [open, setOpen, interactions, data]
    );
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext = () => {
    const context = React.useContext(TooltipContext);

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <Tooltip />");
    }

    return context;
};

export function Tooltip({
    children,
    ...options
}: { children: React.ReactNode } & TooltipOptions) {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const tooltip = useTooltip(options);
    return (
        <TooltipContext.Provider value={tooltip}>
            {children}
        </TooltipContext.Provider>
    );
}

export const TooltipTrigger = React.forwardRef<
    HTMLElement,
    React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                "data-state": context.open ? "open" : "closed",
                
            })
        );
    }

    return (
        <button
            className="text-start"
            ref={ref}
            onClick={ev => console.log('hint')}
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps({...props, onClick: (ev) => {ev.preventDefault(); ev.stopPropagation()}})}
        >
            {children}
        </button>
    );
});

export const TooltipContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                style={{
                    ...context.floatingStyles,
                    ...style
                }}
                {...context.getFloatingProps(props)}
            />
        </FloatingPortal>
    );
});
