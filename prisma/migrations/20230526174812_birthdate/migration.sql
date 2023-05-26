/*
  Warnings:

  - Added the required column `birtdate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birtdate" TIMESTAMP(3) NOT NULL;
