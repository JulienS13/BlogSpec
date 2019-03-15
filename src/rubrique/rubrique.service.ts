import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Rubrique } from "./entity/rubrique.entity";
import { RubriqueRepository } from "./rubrique.repository";

@Injectable()
export class RubriqueService {
    constructor(
        @Inject(RubriqueRepository) private readonly rubriqueRepository: RubriqueRepository
    ) { }

}
