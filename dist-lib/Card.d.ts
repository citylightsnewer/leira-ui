import { type ReactNode } from 'react';
interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}
interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}
interface CardBodyProps {
    children: ReactNode;
    className?: string;
}
interface CardFooterProps {
    children: ReactNode;
    className?: string;
}
export declare function Card({ children, className, hover, glow }: CardProps): import("react/jsx-runtime").JSX.Element;
export declare function CardHeader({ children, className }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function CardBody({ children, className }: CardBodyProps): import("react/jsx-runtime").JSX.Element;
export declare function CardFooter({ children, className }: CardFooterProps): import("react/jsx-runtime").JSX.Element;
interface ImageCardProps {
    image: string;
    title: string;
    description?: string;
    children?: ReactNode;
    className?: string;
}
export declare function ImageCard({ image, title, description, children, className }: ImageCardProps): import("react/jsx-runtime").JSX.Element;
export {};
