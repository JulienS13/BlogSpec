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

    @PrimaryColumn({ type: "varchar", name: "commentaireId", length: 200 })
    commentaireId: string;

    @Column({ type: "varchar", name: "authorId", length: 100 })
    authorId: string;

    @CreateDateColumn()
    created: Date;

    @Column({ type: "varchar", name: "content", length: 100 })
    content: string;

}