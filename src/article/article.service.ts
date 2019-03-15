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
     * Returns a article identified by its author
     *
     * @param id - author id
     * @returns Resolves with Articles
     */
    async getByAuthor(id: string) {
        return this.articleRepository.findOne({ where: { author: id } });
    }

    /**
     * Returns all articles identified by its author
     *
     * @param id - author id
     * @returns Resolves with Articles
     */
    async getAllArticlesByAuthor(author: string) {
        return this.articleRepository.find({ where: { Author: author } })
    }


    /**
* Update an Article identified by its id
*
* @param id - article id
* @returns Resolves with Article
*/
    async updatdeArticle(myArticle: any): Promise<Article> {
        console.log(myArticle.id);
        const article = await this.getById(myArticle.id);
        article.author = myArticle.author;
        article.title = myArticle.title;
        article.updated = new Date(Date.now());
        return this.articleRepository.save(article);
    }



    /**
 * Supprime un article
 *
 * @param id - user id
 * @returns Resolves with Article
 */
    async deleteUser(myArticle: any): Promise<Article> {
        const article = await this.getById(myArticle.id);

        return this.articleRepository.remove(article);
    }

}