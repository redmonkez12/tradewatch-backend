import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AssetsModule } from "./assets/assets.module";
import { CountriesModule } from "./countries/countries.module";
import { MarketsModule } from "./markets/markets.module";
import { CurrenciesModule } from "./currencies/currencies.module";

@Module({
    imports: [AssetsModule, CountriesModule, MarketsModule, CurrenciesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
