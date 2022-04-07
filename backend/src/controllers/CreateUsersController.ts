import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersService";

export class CreateUsersController {
    async handle(request: Request, response: Response) {
        const { name, password } = request.body

        const service = new CreateUsersService();   
        const result = await service.execute({name, password})
        if(result instanceof Error) {
            return response.status(400).json(result.message);
        } 
        
            return response.json(result);
    }
} 