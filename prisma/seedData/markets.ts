import { createId } from "@paralleldrive/cuid2";
import { Market } from "@prisma/client";

import { db } from "lib/db";

const markets = [
    Market.FOREX,
    Market.CRYPTO,
    Market.STOCKS,
    Market.INDICES,
    Market.COMMODITIES,
];

export async function marketsSeed() {
    for (const market of markets) {
        await db.markets.create({
            data: {
                id: createId(),
                name: market,
            },
        });
    }
}
