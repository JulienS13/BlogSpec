import { Module } from "@nestjs/common";

import { customRepository } from "../utils/custom-repository.tools";
import { DatabaseModule } from "../utils/database/database.module";
import { RubriqueController } from "./rubrique.controller";
import { RubriqueRepository } from "./rubrique.repository";
import { RubriqueService } from "./rubrique.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RubriqueController],
    providers: [RubriqueService, customRepository(RubriqueRepository)]
})
export class RubriqueModule { }
