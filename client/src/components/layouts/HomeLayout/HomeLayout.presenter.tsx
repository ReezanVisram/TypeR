import { HomeLayoutProps } from './types';

const usePresenter = (props: HomeLayoutProps): HomeLayoutProps => {
    props = {
        topBar: {
            topNav: {
                title: 'TypeR',
                navItems: [
                    {
                        name: 'Diy-Kits',
                        button: {
                            variant: 'text',
                            href: '/diy-kits',
                            color: 'secondary',
                        },
                    },
                    {
                        name: 'Switches',
                        button: {
                            variant: 'text',
                            href: '/switches',
                            color: 'secondary',
                        },
                    },
                    {
                        name: 'Keycaps',
                        button: {
                            variant: 'text',
                            href: '/keycaps',
                            color: 'secondary',
                        },
                    },
                    {
                        name: 'PCBs',
                        button: {
                            variant: 'text',
                            href: '/pcbs',
                            color: 'secondary',
                        },
                    },
                ],
            },
        },
    };
    return props;
};

export default usePresenter;
