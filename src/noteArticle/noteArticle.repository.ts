import { EntityRepository, Repository } from "typeorm";
import { NoteArticle } from "./entity/noteArticle.entity";

@EntityRepository(NoteArticle)
export class NoteArticleRepository extends Repository<NoteArticle> { }
