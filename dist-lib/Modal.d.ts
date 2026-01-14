import { type ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    closeOnOverlay?: boolean;
    closeOnEscape?: boolean;
}
export declare function Modal({ isOpen, onClose, children, title, size, closeOnOverlay, closeOnEscape }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
interface ModalFooterProps {
    children: ReactNode;
    className?: string;
}
export declare function ModalFooter({ children, className }: ModalFooterProps): import("react/jsx-runtime").JSX.Element;
export {};
