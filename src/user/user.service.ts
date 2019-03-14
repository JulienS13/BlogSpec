import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepository) private readonly userRepository: UserRepository
    ) { }

    /**
     * Returns a user identified by its id
     *
     * @param id - user id
     * @returns Resolves with User
     */
    async getById(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }


    /**
* Update a user identified by its id
*
* @param id - user id
* @returns Resolves with User
*/
    async updateUser(myUser: any): Promise<User> {
        console.log(myUser.id);
        const user = await this.getById(myUser.id);
        user.email = myUser.email;
        user.password = myUser.password;
        user.firstName = myUser.firstName;
        user.lastName = myUser.lastName;
        user.updated = new Date(Date.now());
        user.type = myUser.type;
        user.avatar = myUser.avatar;
        return this.userRepository.save(user);
    }
}
