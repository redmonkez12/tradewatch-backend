import { Module } from "@nestjs/common";

import { CountriesService } from "./countries.service";
import { CountriesController } from "./countries.controller";
import { CommonModule } from "src/common/common.module";

@Module({
    imports: [CommonModule],
    controllers: [CountriesController],
    providers: [CountriesService],
})
export class CountriesModule {

}
