import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Article } from "./entity/article.entity";
import { ArticleRepository } from "./article.repository";
import { UserService } from "../user/user.service";
import { User } from "src/user/entity/user.entity";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(ArticleRepository) private readonly articleRepository: ArticleRepository,
        private UserService: UserService
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
 * @param id - article id
 * @returns Resolves with Article
 */
    async deleteArticle(myArticle: any): Promise<Article> {
        const article = await this.getById(myArticle.id);

        return this.articleRepository.remove(article);
    }



    /**
    * Cache un article
    *
    * @param id - article id
    * @param user - user
    * @returns Resolves with Article
    */
    async hideArticleAsAdmin(myArticle: any, user: User) {
        if (this.UserService.isAdmin(user.userId)) {
            const article = await this.getById(myArticle.id);
            article.isActif = false;
            return this.articleRepository.save(article);
        }
        else {
            return 'Vous n"êtes pas admin';
        }
    }

    /**
    * Affiche un article
    *
    * @param id - article id
    * @param user - user
    * @returns Resolves with Article
    */
    async showArticleAsAdmin(myArticle: any, user: User) {
        if (this.UserService.isAdmin(user.userId)) {
            const article = await this.getById(myArticle.id);
            article.isActif = true;
            return this.articleRepository.save(article);
        }
        else {
            return 'Vous n"êtes pas admin';
        }
    }
}
