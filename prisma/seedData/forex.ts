import { createId } from "@paralleldrive/cuid2";
import { Market } from "@prisma/client";

import { db } from "lib/db";

const currencies = [
    {
        ticker: "GBP/USD",
        name: "British Pound / U.S. Dollar",
    },
    {
        ticker: "GBP/JPY",
        name: "British Pound / Japanese Yen",
    },
    {
        ticker: "USD/JPY",
        name: "U.S. Dollar / Japanese Yen",
    },
    {
        ticker: "EUR/USD",
        name: "Euro / U.S. Dollar",
    },
    {
        ticker: "USD/CAD",
        name: "U.S. Dollar / Canadian Dollar",
    },
    {
        ticker: "AUD/USD",
        name: "Australian Dollar / U.S. Dollar",
    },
    {
        ticker: "NZD/USD",
        name: "New Zealand Dollar / U.S. Dollar",
    },
    {
        ticker: "EUR/JPY",
        name: "Euro / Japanese Yen",
    },
    {
        ticker: "EUR/GBP",
        name: "Euro / British Pound",
    },
    {
        ticker: "GBP/CHF",
        name: "British Pound / Swiss Franc",
    },
    {
        ticker: "AUD/JPY",
        name: "Australian Dollar / Japanese Yen",
    },
    {
        ticker: "AUD/CAD",
        name: "Australian Dollar / Canadian Dollar",
    },
    {
        ticker: "AUD/NZD",
        name: "Australian Dollar / New Zealand Dollar",
    },
    {
        ticker: "NZD/JPY",
        name: "New Zealand Dollar / Japanese Yen",
    },
    {
        ticker: "NZD/CHF",
        name: "New Zealand Dollar / Swiss Franc",
    },
    {
        ticker: "NZD/CAD",
        name: "New Zealand Dollar / Swiss Franc",
    },
    {
        ticker: "EUR/CHF",
        name: "Euro / Swiss Franc",
    },
];

export async function forexSeed() {
    const { id } = await db.markets.findFirstOrThrow({
        where: {
            name: Market.FOREX,
        },
    });

    for (const currency of currencies) {
        await db.assets.create({
            data: {
                id: createId(),
                name: currency.name,
                ticker: currency.ticker,
                marketId: id,
                pipFactor: 10000,
            },
        });
    }
}
