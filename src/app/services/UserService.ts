import { UserDTO } from "../dto/UserDTO";

export default interface IUserService {
    create(user: UserDTO): Promise<UserDTO>;
}