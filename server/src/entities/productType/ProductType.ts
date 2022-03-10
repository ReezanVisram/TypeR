import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { ProductType_ } from '../product/types';
import { ProductTypeType } from './types';

@Entity({ name: 'product_types' })
export default class ProductType implements ProductTypeType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    type!: string;

    @ManyToMany('Product', 'id')
    products!: ProductType_[];
}
