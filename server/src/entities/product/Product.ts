import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Generated,
    OneToMany,
} from 'typeorm';
import { ProductType } from './types';
import { PriceType } from '../price/types';

@Entity({ name: 'products' })
export default class Product implements ProductType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    name!: string;

    @Column('text')
    link!: string;

    @Column('text', { name: 'image_link' })
    imageLink!: string;

    @OneToMany('Price', 'id')
    price!: PriceType;
}
