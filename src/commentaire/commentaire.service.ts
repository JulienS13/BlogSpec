import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Commentaire } from "./entity/commentaire.entity";
import { CommentaireRepository } from "./commentaire.repository";

@Injectable()
export class CommentaireService {
    constructor(
        @Inject(CommentaireRepository) private readonly commentaireRepository: CommentaireRepository
    ) { }

    /**
     * Returns a commentaire identified by its id
     *
     * @param id - commentaire id
     * @returns Resolves with Commentaire
     */
    async getById(id: string) {
        return this.commentaireRepository.findOne(id);
    }
}
