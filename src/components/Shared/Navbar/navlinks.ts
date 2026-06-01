/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleScrollToServices } from "../../../helpers/handleScrollToServicesSection";

export interface NavLink {
    label: string;
    href?: string;
    onClick?: any;
    icon?: React.ReactNode;
    children?: NavLink[];
}

export const NAVLINKS: NavLink[] = [
    {
        label: 'Home',
        href: '/',
    },
    // {
    //     label: 'About',
    //     href: '/about',
    // },
    {
        label: 'Services',
        onClick: handleScrollToServices,
    },
    {
        label: 'Industries',
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