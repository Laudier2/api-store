/*
  Warnings:

  - The `bar_code` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `slug` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "bar_code",
ADD COLUMN     "bar_code" TEXT[],
DROP COLUMN "slug",
ADD COLUMN     "slug" TEXT[];
