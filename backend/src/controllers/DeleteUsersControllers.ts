import { Request, Response } from "express";
import { DeleteUsersService } from "../services/DeleteCategoryService";

export class DeleteUsersController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DeleteUsersService();
        const result =  await service.execute(id);
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        return response.json(204).end();
    }
}