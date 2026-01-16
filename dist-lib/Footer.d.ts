import { type ReactNode } from 'react';
interface FooterLink {
    label: string;
    href: string;
}
interface FooterSection {
    title: string;
    links: FooterLink[];
}
interface SocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}
interface SimpleFooterProps {
    logo?: ReactNode;
    copyright?: string;
    links?: FooterLink[];
    className?: string;
}
export declare function SimpleFooter({ logo, copyright, links, className }: SimpleFooterProps): import("react/jsx-runtime").JSX.Element;
interface MultiColumnFooterProps {
    logo?: ReactNode;
    description?: string;
    sections: FooterSection[];
    socialLinks?: SocialLink[];
    copyright?: string;
    className?: string;
}
export declare function MultiColumnFooter({ logo, description, sections, socialLinks, copyright, className }: MultiColumnFooterProps): import("react/jsx-runtime").JSX.Element;
interface CenteredFooterProps {
    logo?: ReactNode;
    tagline?: string;
    links?: FooterLink[];
    socialLinks?: SocialLink[];
    copyright?: string;
    className?: string;
}
export declare function CenteredFooter({ logo, tagline, links, socialLinks, copyright, className }: CenteredFooterProps): import("react/jsx-runtime").JSX.Element;
interface NewsletterFooterProps {
    logo?: ReactNode;
    title?: string;
    description?: string;
    inputPlaceholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
    sections?: FooterSection[];
    copyright?: string;
    className?: string;
}
export declare function NewsletterFooter({ logo, title, description, inputPlaceholder, buttonText, onSubmit, sections, copyright, className }: NewsletterFooterProps): import("react/jsx-runtime").JSX.Element;
export {};
