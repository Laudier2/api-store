/*
  Warnings:

  - Added the required column `url_product` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "url_product" TEXT NOT NULL;
