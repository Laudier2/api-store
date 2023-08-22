/*
  Warnings:

  - You are about to drop the column `imagem` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "imagem",
ADD COLUMN     "image" TEXT[];
