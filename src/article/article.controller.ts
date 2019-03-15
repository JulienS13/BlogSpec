import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { ArticleService } from "./article.service";
import { Article } from "src/article/entity/article.entity";
import { User } from "src/user/entity/user.entity";

@ApiUseTags("Article")
@Controller("Article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Get(":id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article trouvé et retourné"
    })
    async getById( @Param("id") id: string) {
        return this.articleService.getById(id);
    }

    @Get(":author_id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article trouvé et retourné"
    })
    async getByAuthor( @Param("id") id: string) {
        return this.articleService.getByAuthor(id);

    }


    @Get("articles/:author_id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Articles trouvés et retournés"
    })
    async getAllArticlesByAuthor( @Param("id") id: string) {
        return this.articleService.getAllArticlesByAuthor(id);


    }

    @Post("update/:update")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article modifié"
    })

    async updateArticle( @Body() article: Article) {
        return this.articleService.updatdeArticle(article);
    }

    @Post(":delete")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article supprimé"
    })


    async deleteArticle( @Body() article: Article) {
        return this.articleService.deleteArticle(article);
    }


    @Post(":hide")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article desactivé"
    })


    async hideArticle( @Body() article: Article, user: User) {
        return this.articleService.hideArticleAsAdmin(article, user)
    }

    @Post(":show")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article desactivé"
    })


    async showArticle( @Body() article: Article, user: User) {
        return this.articleService.showArticleAsAdmin(article, user)
    }
}
