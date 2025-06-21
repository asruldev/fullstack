import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Menu)
  @JoinTable()
  menus: Menu[];

  @Column()
  customerEmail: string;

  @Column({ default: 'Pending' })
  status: string;
}
