/*
  Warnings:

  - Added the required column `phone` to the `adress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adress" ADD COLUMN     "phone" TEXT NOT NULL;
