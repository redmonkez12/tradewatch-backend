import { createId } from "@paralleldrive/cuid2";
import { db } from "lib/db";

const countries = [
    "USA",
    "GERMANY",
    "CZECHIA",
    "SLOVAKIA",
    "POLAND",
    "AUSTRIA",
    "SPAIN",
    "NETHERLANDS",
    "BELGIUM",
    "ITALY",
    "FRANCE",
    "SWITZELAND",
    "LUXEMBOURG",
    "LITHUANIA",
    "LATVIA",
    "UNITED_KINGDOM",
    "IRELAND",
    "PORTUGAL",
    "CROATIA",
];

export async function countriesSeed() {
    for (const country of countries) {
        await db.countries.create({
            data: {
              id: createId(),
              name: country,
            },
        });
    }
}
