/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
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
    {
        label: 'About',
        href: '/about-us',
    },
    {
        label: 'Services',
        icon : ICONS.arrowDown,
        onClick: handleScrollToServices,
    },
    {
        label: 'Industries',
        icon : ICONS.arrowDown,
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