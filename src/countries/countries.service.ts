import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/common/PrismaService";

@Injectable()
export class CountriesService {
    constructor(private prismaService: PrismaService) {}

    public get() {
        return this.prismaService.countries.findMany();
    }

    public findOne(id: string) {
        return this.prismaService.countries.findFirstOrThrow({
            where: {
                id,
            },
        });
    }
}
