import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import ContainerTypes from "../../lib/constants/types";
import { UserDTO } from "../dto/UserDTO";
import UserServiceImpl from "../services/UserServiceImpl";

@controller('/auth')
export class AuthController {

constructor(@inject(ContainerTypes.UserServiceImpl) private userService: UserServiceImpl) { }

    @httpGet('/')
    public get(): Promise<UserDTO> {
        /**
         * FIXME: Not the right thing to do.
         * Just testing to make sure application layers such as Controller -> Service -> DTO -> Repository -> Data Store is working
         */
        const user = {
            firstName: 'Manjunath',
            lastName: 'Reddy',
            email: 'manju@manju.com',
            password: 'test',
            status: 'active',
            role: 'ADMIN',
        };

        return this.userService.create(user);
    }
}