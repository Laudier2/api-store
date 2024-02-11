/*
  Warnings:

  - Added the required column `productQuantity` to the `compra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "compra" ADD COLUMN     "productQuantity" TEXT NOT NULL;
