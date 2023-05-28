import { Injectable } from "@nestjs/common";
import { Market } from "@prisma/client";

import { PrismaService } from "src/common/PrismaService";

@Injectable()
export class AssetsService {
    constructor(private prismaService: PrismaService) {}

    public async findOne(id: string) {
        return this.prismaService.assets.findFirstOrThrow({
            where: {
                id,
            },
            include: {
                market: true,
            },
        });
    }

    public async getForexCount() {
        return this.prismaService.assets.count({
            where: {
                market: {
                    name: Market.FOREX,
                },
            },
        });
    }

    public async getForex(offset: number, limit: number): Promise<AssetDto[]> {
        const result = await this.prismaService.assets.findMany({
            where: {
                market: {
                    name: Market.FOREX,
                },
            },
            skip: offset,
            take: limit,
            orderBy: {
                name: "asc",
            },
        });

        return result.map(({ id, name, ticker }) => {
            return {
                id,
                name,
                ticker,
            };
        });
    }
}
