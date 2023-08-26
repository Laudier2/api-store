/*
  Warnings:

  - You are about to drop the column `password` on the `adress` table. All the data in the column will be lost.
  - Added the required column `district` to the `adress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adress" DROP COLUMN "password",
ADD COLUMN     "district" TEXT NOT NULL;
