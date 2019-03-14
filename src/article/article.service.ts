import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Article } from "./entity/article.entity";
import { ArticleRepository } from "./article.repository";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(ArticleRepository) private readonly articleRepository: ArticleRepository
    ) { }

    /**
     * Returns a article identified by its id
     *
     * @param id - article id
     * @returns Resolves with Article
     */
    async getById(id: string): Promise<Article> {
        return this.articleRepository.findOne(id);
    }

    /**
    * Returns all articles 
    *
    * 
    * @returns Resolves with Articles
    */
    async getAllArticle() {
        return this.articleRepository.find();
    }
}