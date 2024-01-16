/*
  Warnings:

  - A unique constraint covering the columns `[bar_code]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "bar_code" SET NOT NULL,
ALTER COLUMN "bar_code" SET DATA TYPE TEXT,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "slug" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_bar_code_key" ON "Product"("bar_code");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
