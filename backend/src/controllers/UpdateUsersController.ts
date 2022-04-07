import { Request, Response } from 'express';
import { UpdateUsersService } from '../services/UpdateUsersService';

export class UpdateUsersController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        const {name, password} = request.body; 

        const service = new UpdateUsersService();

        const result = await service.execute({id, name, password});

        if(result instanceof Error ) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}

