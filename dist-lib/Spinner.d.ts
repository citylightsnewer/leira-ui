type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
type SpinnerVariant = 'default' | 'primary' | 'dots' | 'pulse';
interface SpinnerProps {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
    className?: string;
}
export declare function Spinner({ size, variant, className }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    className?: string;
}
export declare function Skeleton({ width, height, rounded, className }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export {};
