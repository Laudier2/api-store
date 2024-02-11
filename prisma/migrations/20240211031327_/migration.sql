/*
  Warnings:

  - You are about to drop the column `productslist` on the `compra` table. All the data in the column will be lost.
  - Added the required column `productClolor` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productImage` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productPrice` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSize` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productUrl` to the `compra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "compra" DROP COLUMN "productslist",
ADD COLUMN     "productClolor" TEXT NOT NULL,
ADD COLUMN     "productImage" TEXT NOT NULL,
ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "productPrice" TEXT NOT NULL,
ADD COLUMN     "productSize" TEXT NOT NULL,
ADD COLUMN     "productUrl" TEXT NOT NULL;
