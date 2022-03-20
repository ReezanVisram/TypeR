import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Generated,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { ProductType_ } from './types';
import { PriceType } from '../price/types';
import { ProductTypeType } from '../productType/types';
import { VariantType } from '../variant/types';

@Entity({ name: 'products' })
export default class Product implements ProductType_ {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    name!: string;

    @Column('text')
    link!: string;

    @Column('text', { name: 'image_link' })
    imageLink!: string;

    @ManyToMany('ProductType', 'id')
    @JoinTable({
        name: 'products_product_types',
        joinColumn: {
            name: 'product_id',
        },
        inverseJoinColumn: {
            name: 'product_type_id',
        },
    })
    productType!: ProductTypeType[];

    @OneToMany('Variant', 'id')
    variant!: VariantType;
}
