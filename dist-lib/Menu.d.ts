import { type ReactNode } from 'react';
interface MenuItem {
    id: string;
    label: string;
    href?: string;
    icon?: ReactNode;
    onClick?: () => void;
    children?: MenuItem[];
    disabled?: boolean;
}
interface NavbarProps {
    logo?: ReactNode;
    items: MenuItem[];
    variant?: 'default' | 'transparent' | 'bordered';
    sticky?: boolean;
    className?: string;
    actions?: ReactNode;
}
interface DropdownMenuProps {
    trigger: ReactNode;
    items: MenuItem[];
    position?: 'left' | 'right';
    className?: string;
}
export declare function Navbar({ logo, items, variant, sticky, className, actions }: NavbarProps): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenu({ trigger, items, position, className }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
interface SidebarProps {
    items: MenuItem[];
    header?: ReactNode;
    footer?: ReactNode;
    collapsed?: boolean;
    className?: string;
}
export declare function Sidebar({ items, header, footer, collapsed, className }: SidebarProps): import("react/jsx-runtime").JSX.Element;
interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    className?: string;
}
export declare function Breadcrumb({ items, separator, className }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element;
export {};
