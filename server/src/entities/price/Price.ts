import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { VariantType } from '../variant/types';
import { PriceType } from './types';

@Entity({ name: 'prices' })
export default class Price implements PriceType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('decimal', { precision: 10, scale: 4 })
    price!: number;

    @CreateDateColumn({ name: 'price_date' })
    priceDate!: Date;

    @Column('int', { name: 'variant_id' })
    variantId!: number;

    @ManyToOne('Variant', 'id')
    @JoinColumn({ name: 'variant_id' })
    variant!: VariantType;
}
