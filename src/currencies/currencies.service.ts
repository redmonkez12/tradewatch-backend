import { Injectable } from "@nestjs/common";

import { PrismaService } from "../common/PrismaService";

@Injectable()
export class CurrenciesService {
    constructor(private prismaService: PrismaService) {}

    public get() {
        return this.prismaService.currencies.findMany();
    }

    public getMajor() {
        return this.prismaService.currencies.findMany({
            where: {
                name: {
                    notIn: ["CZK", "PLN"],
                },
            },
        });
    }
}
