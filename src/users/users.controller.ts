import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/api/v1/users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("/")
    @HttpCode(201)
    public async register(@Body() createUser: CreateUserDto) {
        await this.usersService.create(createUser);
    }

    @Get("/:id")
    public async getOne(@Param("id") id: string) {
        return this.usersService.findById(id);
    }
}
