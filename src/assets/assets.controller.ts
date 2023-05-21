import { Controller, Get } from "@nestjs/common";

import { AssetsService } from "./assets.service";

@Controller("/api/v1/assets")
export class AssetsController {
    constructor(private readonly assetService: AssetsService) {

    }

    @Get("/forex")
    getForex() {
        return this.assetService.getForex();
    }

    @Get("/stocks")
    getStocks() {
        
    }
}