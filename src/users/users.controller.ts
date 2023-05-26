import { Body, Controller, HttpCode, Post } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/api/v1")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("/users")
    @HttpCode(201)
    public async register(@Body() createUser: CreateUserDto) {
        await this.usersService.create(createUser);
    }
}
