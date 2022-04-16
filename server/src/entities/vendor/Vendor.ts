import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'vendors' })
export default class Vendor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    name!: string;

    @Column('varchar', { length: 255 })
    link!: string;
}
