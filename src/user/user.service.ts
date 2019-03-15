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


    /**
     * Supprime un utilisateur
     *
     * @param id - user id
     * @returns Resolves with User
     */
    async deleteUser(myUser: any): Promise<User> {
        const user = await this.getById(myUser.id);

        return this.userRepository.remove(user);
    }


    /**
    * Vérifie si l'utilisateur est admin
    *
    * @param user - user id
    * @returns Resolves with User
    */
    async isAdmin(id: string) {
        const user = await this.getById(id);
        if (user.type == 'admin') {
            return true;
        }
        else {
            return false;
        }
    };


    /**
    * Met à jout l'adresse email d'un utilisateur si l'utilisateur qui fait l'action
    *
    * @param user - user id
    * @returns Resolves with User
    */
    async updateEmailAsAdmin(myUser: any, id: string) {
        const userIsAdmin = await this.isAdmin(id);
        const myUserIsAdmin = await this.isAdmin(myUser);
        const updatedUser = await this.getById(myUser);
        if (userIsAdmin == true) {
            if (myUserIsAdmin == false) {
                updatedUser.email = myUser.email;
                return this.userRepository.save(updatedUser);
            }
            else {
                return 'Vous ne pouvez pas modifier un utilisateur qui est Admin';
            }
        }
        else {
            return 'Vous n"êtes pas Admin';
        }

    };

    /**
    * Returns all users If admin
    *
    * @param id - user id
    * @returns Resolves with Users
    */
    async getAllUserIfAdmin(id: string) {
        const userIsAdmin = await this.isAdmin(id);
        if (userIsAdmin == true) {
            return this.userRepository.find();
        }
        else {
            return 'Vous n"êtes pas Admin';
        }
    }

}

