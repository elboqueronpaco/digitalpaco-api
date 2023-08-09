import slugify from 'slugify';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class Post {
  //@Column({ primary: true, generated: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  slug: string;
  @Column()
  description: string;
  @Column()
  content: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    this.slug = slugify(this.title, { lower: true });
  }
}
