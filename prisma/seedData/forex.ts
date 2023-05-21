import { createId } from "@paralleldrive/cuid2";
import { Market } from "@prisma/client";
import { db } from "lib/db";

const currencies = [
    {
        ticker: "GBPUSD",
        name: "British Pound / U.S. Dollar",
    },
    {
        ticker: "GBPJPY",
        name: "British Pound / Japanese Yen",
    },
    {
        ticker: "USDJPY",
        name: "U.S. Dollar / Japanese Yen",
    },
    {
        ticker: "EURUSD",
        name: "Euro / U.S. Dollar",
    },
    {
        ticker: "USDCAD",
        name: "U.S. Dollar / Canadian Dollar",
    },
    {
        ticker: "AUDUSD",
        name: "Australian Dollar / U.S. Dollar",
    },
    {
        ticker: "NZDUSD",
        name: "New Zealand Dollar / U.S. Dollar",
    },
    {
        ticker: "EURJPY",
        name: "Euro / Japanese Yen",
    },
    {
        ticker: "EURGBP",
        name: "Euro / British Pound",
    },
    {
        ticker: "GBPCHF",
        name: "British Pound / Swiss Franc",
    },
    {
        ticker: "AUDJPY",
        name: "Australian Dollar / Japanese Yen",
    },
    {
        ticker: "AUDCAD",
        name: "Australian Dollar / Canadian Dollar",
    },
    {
        ticker: "AUDNZD",
        name: "Australian Dollar / New Zealand Dollar",
    },
    {
        ticker: "NZDJPY",
        name: "New Zealand Dollar / Japanese Yen",
    },
    {
        ticker: "NZDCHF",
        name: "New Zealand Dollar / Swiss Franc",
    },
    {
        ticker: "NZDCAD",
        name: "New Zealand Dollar / Swiss Franc",
    },
    {
        ticker: "EURCHF",
        name: "Euro / Swiss Franc",
    },
];


export async function forexSeed() {
    const forex = await db.markets.findFirstOrThrow({
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
              marketId: forex.id,
              pipFactor: 10000,
            },
        });
    }
}
