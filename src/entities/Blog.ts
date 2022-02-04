import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("blog")
export default class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title_blog: string;
  @Column()
  content_blog: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
