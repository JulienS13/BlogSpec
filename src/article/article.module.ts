import { Module } from "@nestjs/common";

import { customRepository } from "../utils/custom-repository.tools";
import { DatabaseModule } from "../utils/database/database.module";
import { ArticleController } from "./article.controller";
import { ArticleRepository } from "./article.repository";
import { ArticleService } from "./article.service";

import { UserService } from "../user/user.service";
import { UserController } from "../user/user.controller";
import { UserRepository } from "../user/user.repository";




@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [ArticleService, customRepository(ArticleRepository)]
})
export class ArticleModule { }
