import { Test, TestingModule } from "@nestjs/testing";
import { CommentaireController } from "./commentaire.controller";
import { CommentaireService } from "./commentaire.service";

describe("Commentaire Controller", () => {
    let controller: CommentaireController;
    let service: CommentaireService;

    beforeAll(async () => {
        service = {} as any;
        controller = new CommentaireController(service);
    });

    describe("getById", () => {
        it("should return the result of service.getById", async () => {
            const id = "monId";
            const commentaire = { name: "commentaire1" };
            service.getById = jest.fn().mockResolvedValue(commentaire);

            const result = await controller.getById(id);

            expect(result).toBe(commentaire);
            expect(service.getById).toHaveBeenCalledWith(id);
        });
    });
});
