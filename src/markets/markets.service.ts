import { Injectable } from "@nestjs/common";
import { Market } from "@prisma/client";

import { PrismaService } from "src/common/PrismaService";

@Injectable()
export class MarketsService {
    constructor(private prismaService: PrismaService) {}

    public getByName(name: Market) {
        return this.prismaService.markets.findFirstOrThrow({
            where: {
                name,
            },
        });
    }

    public get() {
        return this.prismaService.markets.findMany({
            orderBy: {
                name: "asc",
            },
        });
    }
}
