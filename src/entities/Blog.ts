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
  @Column("text", { nullable: true })
  title_blog: string;
  @Column("text", { nullable: true })
  content_blog: string;
  @CreateDateColumn({ type: "timestamptz", default: "now()" })
  created_at: Date = new Date();
  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date = new Date();
}
