import { Body, Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { CommentaireService } from "./commentaire.service";

@ApiUseTags("Commentaire")
@Controller("commentaire")
export class CommentaireController {
    constructor(private readonly commentaireService: CommentaireService) { }

    @Get(":id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Commentaire trouvé et retourné"
    })
    async getById( @Param("id") id: string) {
        return this.commentaireService.getById(id);
    }
}
