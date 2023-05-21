import { Injectable } from "@nestjs/common";
import { Market } from "@prisma/client";

import { PrismaService } from "src/common/PrismaService";

@Injectable()
export class AssetsService {
    constructor(private prismaService: PrismaService) {}
    
    public async getForex(): Promise<AssetDto[]> {
        const result = await this.prismaService.assets.findMany({
            where: {
                market: {
                    name: Market.FOREX,
                },
            },
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