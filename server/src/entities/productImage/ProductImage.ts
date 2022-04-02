import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Product from '../product/Product';

@Entity({ name: 'product_images' })
export default class ProductImage {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    src!: string;

    @Column('decimal')
    width!: number;

    @Column('decimal')
    height!: number;

    @ManyToOne(() => Product, (type) => type.images)
    @JoinColumn({ name: 'product_id' })
    product!: Product;
}
