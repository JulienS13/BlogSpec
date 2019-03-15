import {
    Column,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToMany
} from "typeorm";
import { User } from '../../user/entity/user.entity';
import { Article } from '../../article/entity/article.entity';
@Entity()
export class Rubrique {

    @ManyToMany(article => Article, rubrique => Rubrique)
    articles: Article[];

    @OneToMany(rubrique => Rubrique, user => User)
    user: User;

    @PrimaryGeneratedColumn("uuid", { name: "rubrique_id" })
    rubriqueId: string;

    @Column({ type: "varchar", name: "title", length: 200 })
    title: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
