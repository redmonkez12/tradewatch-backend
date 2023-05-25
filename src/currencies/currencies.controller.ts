import { Controller, Get } from "@nestjs/common";

import { CurrenciesService } from "./currencies.service";

@Controller("/api/v1/currencies")
export class CurrenciesController {
    constructor(private currenciesService: CurrenciesService) {}

    @Get("/")
    public get() {
        return this.currenciesService.get();
    }

    @Get("/major")
    public getMajor() {
        return this.currenciesService.getMajor();
    }
}
