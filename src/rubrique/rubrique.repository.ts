import { EntityRepository, Repository } from "typeorm";
import { Rubrique } from "./entity/rubrique.entity";

@EntityRepository(Rubrique)
export class RubriqueRepository extends Repository<Rubrique> { }
