import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AssetsModule } from "./assets/assets.module";
import { CountriesModule } from "./countries/countries.module";
import { MarketsModule } from "./markets/markets.module";
import { CurrenciesModule } from "./currencies/currencies.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [
        AssetsModule,
        CountriesModule,
        MarketsModule,
        CurrenciesModule,
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
