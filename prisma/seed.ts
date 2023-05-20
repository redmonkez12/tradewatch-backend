import { db } from "../lib/db";
import { countriesSeed } from "./seedData/countries";

async function main() {
  await db.countries.deleteMany();

  await countriesSeed();
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
