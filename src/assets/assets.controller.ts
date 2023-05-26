import { Controller, Get, Param } from "@nestjs/common";

import { AssetsService } from "./assets.service";

@Controller("/api/v1/assets")
export class AssetsController {
    constructor(private readonly assetService: AssetsService) {}

    @Get("/forex")
    public async getForex() {
        return this.assetService.getForex();
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
