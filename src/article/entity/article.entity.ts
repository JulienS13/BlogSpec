import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

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
}