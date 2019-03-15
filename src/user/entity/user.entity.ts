import {
    Column,
    OneToMany,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Article } from '../../article/entity/article.entity';
@Entity()
export class User {

    @OneToMany(type => Article, article => article.author)
    articles: Article[];

    @PrimaryGeneratedColumn("uuid", { name: "user_id" })
    userId: string;

    @Column({ type: "varchar", name: "email", length: 200 })
    email: string;

    @Column({ type: "varchar", name: "password" })
    password: string;

    @Column({ type: "varchar", name: "first_name", length: 100 })
    firstName: string;

    @Column({ type: "varchar", name: "last_name", length: 100 })
    lastName: string;

    @Column({ type: "varchar", name: "type" })
    type: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column({ type: "varchar", name: "avatar", length: 31 })
    avatar: string;

    @Column({ type: "boolean", name: "isActif" })
    isActif: boolean;

}
