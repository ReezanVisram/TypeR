import { TopNavProps } from './types';

const usePresenter = (props: TopNavProps): TopNavProps => {
    props = {
        ...props,
        titleProperties: {
            variant: 'h4',
            noWrap: true,
            sx: {
                mr: 2,
                display: {
                    xs: 'none',
                    md: 'flex',
                },
                flexDirection: 'column',
                justifyContent: 'center',
            },
        },
        containerStyles: {
            display: 'flex',
            flexGrow: 1,
            m: 0,
        },
    };
    return props;
};

export default usePresenter;
