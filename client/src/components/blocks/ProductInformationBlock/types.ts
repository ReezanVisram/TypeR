import { PriceGraphProps } from '../../organisms/PriceGraph';
import { ProductInformationCardProps } from '../../organisms/ProductInformationCard';

export type ProductInformationBlockProps = {
    title?: string;
    graph?: PriceGraphProps;
    informationCard?: ProductInformationCardProps;
};
