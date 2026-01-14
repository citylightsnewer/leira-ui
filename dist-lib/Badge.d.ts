import { type ReactNode } from 'react';
type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
type BadgeSize = 'sm' | 'md' | 'lg';
interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    className?: string;
}
export declare function Badge({ children, variant, size, dot, className }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
