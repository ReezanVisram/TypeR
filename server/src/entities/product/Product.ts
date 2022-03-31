import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Generated,
    OneToMany,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { ProductType_ } from './types';
import { PriceType } from '../price/types';
import { ProductTypeType } from '../productType/types';
import { VariantType } from '../variant/types';
import { ProductType } from '../productType';

@Entity({ name: 'products' })
export default class Product implements ProductType_ {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255, name: 'product_title' })
    productTitle!: string;

    @Column('varchar', { length: 255 })
    link!: string;

    @Column('varchar', { length: 255 })
    vendor!: string;

    @OneToMany(() => ProductType, (type) => type.product)
    types!: ProductType[];

    @OneToMany('Variant', 'id')
    variant!: VariantType[];
}
