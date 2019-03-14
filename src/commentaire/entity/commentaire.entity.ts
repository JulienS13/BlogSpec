import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Commentaire {

    @PrimaryGeneratedColumn("uuid", { name: "commentaire_id" })
    CommentaireId: string;

    @Column({ type: "varchar", name: "authorId", length: 100 })
    authorId: string;

    @CreateDateColumn()
    created: Date;

    @Column({ type: "varchar", name: "content", length: 100 })
    content: string;

}