import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductType_ } from './types';
import { VariantType } from '../variant/types';
import { ProductType } from '../productType';
import { Variant } from '../variant';
import ProductImage from '../productImage/ProductImage';

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

    @OneToMany(() => Variant, (type) => type.product)
    variants!: VariantType[];

    @OneToMany(() => ProductImage, (type) => type.product)
    images!: ProductImage[];
}
