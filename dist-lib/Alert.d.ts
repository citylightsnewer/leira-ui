import { type ReactNode } from 'react';
type AlertVariant = 'success' | 'warning' | 'error' | 'info';
interface AlertProps {
    children: ReactNode;
    variant?: AlertVariant;
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}
export declare function Alert({ children, variant, title, dismissible, onDismiss, className }: AlertProps): import("react/jsx-runtime").JSX.Element;
export {};
