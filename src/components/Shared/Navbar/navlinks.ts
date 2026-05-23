export interface NavLink {
    label: string;
    href: string;
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
        href: '/about',
    },
    {
        label: 'Services',
        href: '/services',
    },
    {
        label: 'Industries',
        href: '/industries',
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