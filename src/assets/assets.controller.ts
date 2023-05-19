import { Controller, Get } from "@nestjs/common";

import { AssetsService } from "./assets.service";

@Controller()
export class AssetsController {
    constructor(private readonly assetService: AssetsService) {

    }

    @Get()
    getStocks() {
        try {
            
        } catch (e) {

        }
    }
}