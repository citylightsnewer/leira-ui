import { type ReactNode } from 'react';
interface AccordionItem {
    id: string;
    title: string;
    content: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}
interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpenIds?: string[];
    className?: string;
}
export declare function Accordion({ items, allowMultiple, defaultOpenIds, className }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
