import { UserDTO } from "../dto/UserDTO";

export interface IUserRepository {
    create(userDTO: UserDTO): Promise<UserDTO>;
}