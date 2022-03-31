import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import { ProductType_ } from '../product/types';
import { VariantImageType } from '../variantImage/types';
import { VariantType } from './types';

@Entity({ name: 'variants' })
export default class Variant implements VariantType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255, name: 'variant_title' })
    variantTitle!: string;

    @Column('double')
    grams!: number;

    @Column('bool')
    available!: boolean;

    @Column('int', { name: 'featured_image_id', nullable: true })
    featuredImageId!: number;

    @Column('int', { name: 'product_id', nullable: true })
    productId!: number;

    @OneToOne('VariantImage', 'id')
    @JoinColumn({ name: 'featured_image_id' })
    featuredImage!: VariantImageType;

    @ManyToOne('Product', 'id', { nullable: true })
    @JoinColumn({ name: 'product_id' })
    product!: ProductType_;
}
