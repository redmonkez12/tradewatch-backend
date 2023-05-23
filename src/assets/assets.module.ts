import { Module } from "@nestjs/common";

import { AssetsService } from "./assets.service";
import { AssetsController } from "./assets.controller";
import { CommonModule } from "src/common/common.module";

@Module({
    imports: [CommonModule],
    controllers: [AssetsController],
    providers: [AssetsService],
})
export class AssetsModule {}
