import { createId } from "@paralleldrive/cuid2";
import { Market } from "@prisma/client";

import { db } from "lib/db";

const commodities = [
    {
        ticker: "XAUUSD",
        name: "Gold Spot / U.S. Dollar",
    },
];

export async function commoditiesSeed() {
    const { id } = await db.markets.findFirstOrThrow({
        where: {
            name: Market.COMMODITIES,
        },
    });

    for (const commodity of commodities) {
        await db.assets.create({
            data: {
                id: createId(),
                name: commodity.name,
                ticker: commodity.ticker,
                marketId: id,
                pipFactor: 100,
            },
        });
    }
}
