import { Module } from "@nestjs/common";

import { MarketsController } from "./markets.controller";
import { MarketsService } from "./markets.service";
import { CommonModule } from "src/common/common.module";

@Module({
    imports: [CommonModule],
    controllers: [MarketsController],
    providers: [MarketsService],
})
export class MarketsModule {}
