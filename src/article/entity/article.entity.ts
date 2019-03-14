import {
    Column,
    JoinColumn,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";

import { User } from '../../user/entity/user.entity';

@Entity()
export class Article {

    @PrimaryGeneratedColumn('uuid', { name: 'article_id' })
    articleId: string;

    @Column({ type: 'varchar', name: 'title' })
    title: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column({ type: "varchar", name: "author", length: 200 })
    author: User;

}