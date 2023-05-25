/*
  Warnings:

  - You are about to drop the column `currency` on the `Account` table. All the data in the column will be lost.
  - Added the required column `currencyId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "currency",
ADD COLUMN     "currencyId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Currency";

-- CreateTable
CREATE TABLE "Currencies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Currencies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_id_fkey" FOREIGN KEY ("id") REFERENCES "Currencies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
