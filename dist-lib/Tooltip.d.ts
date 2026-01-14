import { type ReactNode } from 'react';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    position?: TooltipPosition;
    delay?: number;
    className?: string;
}
export declare function Tooltip({ children, content, position, delay, className }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
