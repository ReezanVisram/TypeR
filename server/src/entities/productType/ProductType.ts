import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { ProductType_ } from '../product/types';
import { ProductTypeType } from './types';

@Entity({ name: 'product_types' })
export default class ProductType implements ProductTypeType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    type!: string;

    @Column('int', { name: 'product_id', nullable: true })
    productId!: number;

    @ManyToOne('Product', 'id')
    @JoinColumn({ name: 'product_id' })
    product!: ProductType_;
}
