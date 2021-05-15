import { getConnection } from "typeorm";

import { injectable } from "inversify";
import { UserDTO } from "../dto/UserDTO";
import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

@injectable()
export default class UserRepository implements IUserRepository {
    public async create(userDTO: UserDTO): Promise<UserDTO> {
        const conn = getConnection();
        const userRepository = conn.getRepository(User);

        return await userRepository.save(userDTO)
    }
}
