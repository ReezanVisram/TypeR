import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { VariantType } from '../variant/types';
import { VariantImageType } from './types';

@Entity({ name: 'variant_images' })
export default class VariantImage implements VariantImageType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    src!: string;

    @Column('decimal')
    width!: number;

    @Column('decimal')
    height!: number;

    @OneToOne('Variant', 'id')
    variant!: VariantType;
}
