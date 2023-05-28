import { Controller, Get, Param, Query } from "@nestjs/common";

import { AssetsService } from "./assets.service";

@Controller("/api/v1/assets")
export class AssetsController {
    constructor(private readonly assetService: AssetsService) {}

    @Get("/forex")
    public async getForex(
        @Query("offset") offset: string,
        @Query("limit") limit: string,
    ) {
        return this.assetService.getForex(
            Number(offset) || 0,
            Number(limit) || 10,
        );
    }

    @Get("/forex/count")
    public async getForexCount() {
        return this.assetService.getForexCount();
    }

    @Get("/stocks")
    public getStocks() {
        return "Not implemented";
    }

    @Get("/:id")
    public async getOne(@Param("id") id: string) {
        return this.assetService.findOne(id);
    }
}
