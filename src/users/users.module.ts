import { Module } from "@nestjs/common";

import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CountriesModule } from "../countries/countries.module";
import { CommonModule } from "../common/common.module";

@Module({
    imports: [CountriesModule, CommonModule],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
