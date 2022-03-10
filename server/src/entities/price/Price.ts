import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Generated,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { PriceType } from './types';
import { ProductType_ } from '../product/types';

@Entity({ name: 'prices' })
export default class Price implements PriceType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('decimal', { precision: 10, scale: 4 })
    price!: number;

    @CreateDateColumn({ name: 'price_date' })
    priceDate!: Date;

    @ManyToOne('Product', 'id')
    @JoinColumn({ name: 'product_id' })
    product!: ProductType_;
}
