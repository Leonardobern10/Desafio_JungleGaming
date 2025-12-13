import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('notification')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  event: string;

  @Column('json')
  payload: any;

  @Column({ default: false })
  delivered: boolean;

  @Column({ nullable: true })
  userId?: string; // Para filtrar notificações por usuário

  @CreateDateColumn()
  createdAt: Date;
}
