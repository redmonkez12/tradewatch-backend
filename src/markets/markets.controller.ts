import { Controller, Get, Param } from "@nestjs/common";

import { MarketsService } from "./markets.service";

@Controller("/api/v1")
export class MarketsController {
    constructor(private marketsService: MarketsService) {}

    @Get("/markets")
    public get() {
        return this.marketsService.get();
    }

    @Get("/markets/:id")
    public getById(@Param("id") id: string) {
        return this.marketsService.getById(id);
    }
}
