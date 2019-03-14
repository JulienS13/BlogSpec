import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { ArticleService } from "./article.service";
import { Article } from "src/article/entity/article.entity";

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


    @Get("article/")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Article trouvés"

    })
    async getAllArticle() {
        return this.articleService.getAllArticle();
    }

}
