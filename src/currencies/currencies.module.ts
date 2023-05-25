import { Module } from "@nestjs/common";

import { CommonModule } from "src/common/common.module";
import { CurrenciesService } from "./currencies.service";
import { CurrenciesController } from "./currencies.controller";

@Module({
    imports: [CommonModule],
    controllers: [CurrenciesController],
    providers: [CurrenciesService],
})
export class CurrenciesModule {}
