import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { CountriesModule } from "./countries/countries.module";
import { PrismaService } from "./common/PrismaService";

@Module({
  imports: [AssetsModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
