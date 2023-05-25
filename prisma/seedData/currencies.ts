import { createId } from "@paralleldrive/cuid2";

import { db } from "../../lib/db";

const currencies = [
    "CZK",
    "PLN",
    "GBP",
    "USD",
    "EUR",
    "AUD",
    "CHF",
    "JPY",
    "NZD",
    "CAD",
];

export async function currenciesSeed() {
    for (const currency of currencies) {
        await db.currencies.create({
            data: {
                id: createId(),
                name: currency,
            },
        });
    }
}
