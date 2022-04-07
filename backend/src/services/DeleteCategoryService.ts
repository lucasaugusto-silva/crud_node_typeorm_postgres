import { getRepository } from "typeorm";
import { Users } from "../entities/Users";

export class DeleteUsersService {
    async execute(id: string) {
        const repo = getRepository(Users);
        if(!await repo.findOne({select: ["id"]})) {
            return new Error("Users does not exist!")
        }
        await repo.delete("id")
    }
}