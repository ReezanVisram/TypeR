import { TopBarProps } from './types';
import { useHistory } from 'react-router-dom';

const usePresenter = (props: TopBarProps): TopBarProps => {
    const history = useHistory();

    const handleNavClick = (to: string) => {
        history.push(to);
    };

    props = {
        topNav: {
            title: 'TypeR',
            navItems: [
                {
                    name: 'Diy-Kits',
                    button: {
                        variant: 'text',
                        onClick: () => handleNavClick('/products/diy-kits'),
                        color: 'secondary',
                    },
                },
                {
                    name: 'Switches',
                    button: {
                        variant: 'text',
                        onClick: () => handleNavClick('/products/switches'),
                        color: 'secondary',
                    },
                },
                {
                    name: 'Keycaps',
                    button: {
                        variant: 'text',
                        onClick: () => handleNavClick('/products/keycaps'),
                        color: 'secondary',
                    },
                },
                {
                    name: 'PCBs',
                    button: {
                        variant: 'text',
                        onClick: () => handleNavClick('/products/pcbs'),
                        color: 'secondary',
                    },
                },
            ],
        },
    };
    return props;
};

export default usePresenter;
