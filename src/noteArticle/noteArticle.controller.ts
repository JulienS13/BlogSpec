import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { NoteArticleService } from "./noteArticle.service";
import { NoteArticle } from "src/noteArticle/entity/noteArticle.entity";

@ApiUseTags("NoteArticle")
@Controller("noteArticle")
export class NoteArticleController {
    constructor(private readonly noteArticleService: NoteArticleService) { }

    @Get(":id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "NoteArticle trouvé et retourné"
    })
    async getById( @Param("id") id: string) {
        return this.noteArticleService.getById(id);
    }

    @Post("Add/:noteAricle")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "NoteArticle Ajouté ou Modifié"
    })
    async addNoteArticle( @Param("noteArticle") noteArticle: NoteArticle) {
        return this.noteArticleService.addNoteArticle(noteArticle);
    }
}
