import { CannotGetEntityManagerNotConnectedError, getRepository } from "typeorm";
import { Users } from "../entities/Users";

type UsersUpdateRequest = {
    id: string; 
    name: string;
    password: string;
}

export class UpdateUsersService {
    async execute({id, name, password}: UsersUpdateRequest) {
        const repo = getRepository(Users)

        const users = await repo.findOne(id);
    if(!users) {
        return new Error("Users does not exists!")
    }
    users.name = name ? name: users.name;
    users.password = password ? password: users.password;
    await repo.save(users);

    return users;

    }
}