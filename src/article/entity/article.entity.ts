import {
    Column,
    JoinColumn,
    ManyToOne,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";

import { User } from '../../user/entity/user.entity';

@Entity()
export class Article {

    @JoinColumn({ name: 'author_id' })
    @ManyToOne(type => User, author => author.articles)
    author: string;

    @PrimaryGeneratedColumn('uuid', { name: 'article_id' })
    articleId: string;

    @Column({ type: 'varchar', name: 'title' })
    title: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}