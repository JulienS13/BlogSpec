import { Module } from "@nestjs/common";

import { customRepository } from "../utils/custom-repository.tools";
import { DatabaseModule } from "../utils/database/database.module";
import { NoteArticleController } from "./noteArticle.controller";
import { NoteArticleRepository } from "./noteArticle.repository";
import { NoteArticleService } from "./noteArticle.service";

@Module({
    imports: [DatabaseModule],
    controllers: [NoteArticleUserController],
    providers: [NoteArticleService, customRepository(NoteArticleRepository)]
})
export class NoteArticleModule { }
