import { type ButtonHTMLAttributes, type ReactNode } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}
export declare function Button({ children, variant, size, loading, icon, iconPosition, className, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
