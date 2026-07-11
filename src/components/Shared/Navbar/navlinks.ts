/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleScrollToServices } from "../../../helpers/handleScrollToServicesSection";

export interface NavLink {
    label: string;
    href?: string;
    onClick?: any;
    icon?: React.ReactNode;
    hasMenu?: boolean;
    children?: NavLink[];
}

export const NAVLINKS: NavLink[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about-us',
    },
    {
        label: 'Services',
        hasMenu : true,
        onClick: handleScrollToServices,
    },
    {
        label: 'Industries',
        hasMenu : true,
        href: '/coming-soon',
    },
    {
        label: 'Work',
        href: '/our-work',
    },
    {
        label: 'Contact Us',
        href: '/contact-us',
    },
] as const;