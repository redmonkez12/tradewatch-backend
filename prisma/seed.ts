import { db } from "../lib/db";
import { countriesSeed } from "./seedData/countries";
import { forexSeed } from "./seedData/forex";
import { marketsSeed } from "./seedData/markets";
import { commoditiesSeed } from "./seedData/commodities";

async function main() {
    await db.countries.deleteMany();
    await db.markets.deleteMany();
    await db.assets.deleteMany();

    await marketsSeed();
    await countriesSeed();
    await forexSeed();
    await commoditiesSeed();
}

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
