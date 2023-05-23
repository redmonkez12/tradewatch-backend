import { Controller, Get } from "@nestjs/common";

import { CountriesService } from "./countries.service";

@Controller("api/v1/countries")
export class CountriesController {
    constructor(private countriesService: CountriesService) {}

    @Get()
    public get() {
        return this.countriesService.get();
    }
}
