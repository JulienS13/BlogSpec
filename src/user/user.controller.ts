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
}
