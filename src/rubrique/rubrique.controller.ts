import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { RubriqueService } from "./rubrique.service";
import { Rubrique } from "src/rubrique/entity/rubrique.entity";

@ApiUseTags("Rubrique")
@Controller("rubrique")
export class RubriqueController {
    constructor(private readonly rubriqueService: RubriqueService) { }

}
