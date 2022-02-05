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
  id: number = 0;
  @Column("text")
  title_blog: string;
  @Column("text")
  content_blog: string;
  @CreateDateColumn({ type: "timestamptz", default: "now()" })
  created_at: Date = new Date();
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updated_at: Date = new Date();
}
