import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Product from '../product/Product';
import { ProductType_ } from '../product/types';
import { ProductTypeType } from './types';

@Entity({ name: 'product_types' })
export default class ProductType implements ProductTypeType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    type!: string;

    @ManyToOne(() => Product, (product) => product.types)
    @JoinColumn({ name: 'product_id' })
    product!: Product;
}
