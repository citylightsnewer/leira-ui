import { type ReactNode } from 'react';
interface CarouselItem {
    id: string;
    content: ReactNode;
}
interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    variant?: 'default' | 'fade' | 'slide';
    className?: string;
}
export declare function Carousel({ items, autoPlay, interval, showArrows, showDots, variant, className }: CarouselProps): import("react/jsx-runtime").JSX.Element;
interface ImageCarouselProps {
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    showCaption?: boolean;
    aspectRatio?: 'video' | 'square' | 'wide';
    className?: string;
}
export declare function ImageCarousel({ images, autoPlay, interval, showArrows, showDots, showCaption, aspectRatio, className }: ImageCarouselProps): import("react/jsx-runtime").JSX.Element;
interface CardCarouselProps {
    children: ReactNode[];
    visibleCards?: number;
    gap?: number;
    showArrows?: boolean;
    className?: string;
}
export declare function CardCarousel({ children, visibleCards, gap, showArrows, className }: CardCarouselProps): import("react/jsx-runtime").JSX.Element;
interface Testimonial {
    id: string;
    content: string;
    author: string;
    role?: string;
    avatar?: string;
}
interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}
export declare function TestimonialCarousel({ testimonials, autoPlay, interval, className }: TestimonialCarouselProps): import("react/jsx-runtime").JSX.Element;
export {};
