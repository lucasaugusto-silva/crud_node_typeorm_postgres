import { getRepository } from "typeorm";
import { Users } from "../entities/Users";

export class GetAllUsersService {
    async execute() {
        const repo = getRepository(Users)
        const users = await repo.find();
        return users;  
    }
}