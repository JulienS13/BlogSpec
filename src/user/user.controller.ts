import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { User } from "src/user/entity/user.entity";

@ApiUseTags("User")
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(":id")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User trouvé et retourné"
    })
    async getById( @Param("id") id: string) {
        return this.userService.getById(id);
    }


    @Post("update/:update")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User modifié"
    })

    async updateUser( @Body() user: User) {
        return this.userService.updateUser(user);
    }

    @Post(":delete")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User modifié"
    })


    async deleteUser( @Body() user: User) {
        return this.userService.deleteUser(user);
    }


    @Get("admin/:isAdmin")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User est admin"
    })

    async isAdmin( @Param("id") id: string) {
        return this.userService.isAdmin(id);
    }

    @Post("admin/:updateEmail")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User Email modifié"
    })

    async updateEmailAsAdmin( @Body() myUser: User, id: string) {
        return this.userService.updateEmailAsAdmin(myUser, id);
    }


    @Post("admin/:updateEmail")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "User Email modifié"
    })

    async updateRoleAsAdmin( @Body() myUser: User, id: string) {
        return this.userService.updateRoleAsAdmin(myUser, id);
      
      
      
    @Get("admin/:getAllUser")
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Tous les users ont été récupérés"
    })

    async getAllUserIfAdmin( @Param("id") id: string) {
        return this.userService.getAllUserIfAdmin(id);

    }
}
