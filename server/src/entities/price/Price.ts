import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Generated,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm';
import { PriceType } from './types';
import { ProductType } from '../product/types';

@Entity({ name: 'prices' })
export default class Price implements PriceType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('uuid')
    @Generated('uuid')
    uuid!: string;

    @Column('decimal', { precision: 10, scale: 4 })
    price!: number;

    @CreateDateColumn({ name: 'price_date' })
    priceDate!: Date;

    @ManyToOne('Product', 'id')
    product!: ProductType;
}
