import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

import { PrismaService } from "../common/PrismaService";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    async findOne(username: string) {
        return this.prismaService.user.findFirstOrThrow({
            where: {
                username,
            },
        });
    }

    async create(user: CreateUserDto) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);

        return this.prismaService.user.create({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: hashPassword,
                username: user.username,
                countryId: user.country,
                birthdate: new Date(user.birthdate),
            },
        });
    }
}
