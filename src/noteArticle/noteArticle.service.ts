import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { NoteArticle } from "./entity/noteArticle.entity";
import { NoteArticleRepository } from "./noteArticle.repository";

@Injectable()
export class UserService {
    constructor(
        @Inject(NoteArticleRepository) private readonly noteArticleRepository: NoteArticleRepository
    ) { }

    /**
     * Returns a noteArticle identified by its id
     *
     * @param id - noteArticle id
     * @returns Resolves with NoteArticle
     */
    async getById(id: string): Promise<NoteArticle> {
        return this.noteArticleRepository.findOne(id);
    }


}