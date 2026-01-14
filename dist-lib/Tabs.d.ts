import { type ReactNode } from 'react';
interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}
interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    onChange?: (id: string) => void;
    variant?: 'underline' | 'pills' | 'boxed';
    className?: string;
}
export declare function Tabs({ items, defaultActiveId, onChange, variant, className }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
