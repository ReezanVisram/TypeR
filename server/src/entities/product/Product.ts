import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Generated,
    OneToMany,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm';
import { ProductType_ } from './types';
import { PriceType } from '../price/types';
import { ProductTypeType } from '../productType/types';
import { VariantType } from '../variant/types';

@Entity({ name: 'products' })
export default class Product implements ProductType_ {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    title!: string;

    @Column('varchar', { length: 255 })
    link!: string;

    @Column('varchar', { length: 255 })
    vendor!: string;

    @OneToMany('ProductType', 'id')
    types!: ProductTypeType[];

    @OneToMany('Variant', 'id')
    variant!: VariantType[];
}
