import { inject, injectable } from "inversify";
import ContainerTypes from "../../lib/constants/types";
import { UserDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repositories/IUserRepository";
import IUserService from "./UserService";
@injectable()
export default class UserServiceImpl implements IUserService {

    constructor(@inject(ContainerTypes.UserRepository) private userRepository: IUserRepository) {}

    public async create(user: UserDTO): Promise<UserDTO> {
        return await this.userRepository.create(user);
    }
}