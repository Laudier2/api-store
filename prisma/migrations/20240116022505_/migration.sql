/*
  Warnings:

  - The `slug` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Product_slug_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "slug",
ADD COLUMN     "slug" TEXT[];
