import {
    Column,
    OneToOne,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import { Article } from '../../article/entity/article.entity';
import { User } from '../../user/entity/user.entity';

@Entity()
export class NoteArticle {

    @PrimaryGeneratedColumn("uuid", { name: "noteArticle_id" })
    noteArticle_id: string;

    @Column({ type: "number", name: "grade" })
    grade: number;

    @OneToOne(type => User, user => User)
    user: User;

    @OneToOne(type => Article, article => Article)
    article: Article;



}
