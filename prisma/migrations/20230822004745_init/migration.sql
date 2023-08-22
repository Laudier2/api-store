/*
  Warnings:

  - You are about to drop the column `apartment_or_house` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `number1` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `adresses2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relationsAdress2` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `phone` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_id_category_fkey";

-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_id_product_fkey";

-- DropForeignKey
ALTER TABLE "relationsAdress2" DROP CONSTRAINT "relationsAdress2_id_adress_fkey";

-- DropForeignKey
ALTER TABLE "relationsAdress2" DROP CONSTRAINT "relationsAdress2_id_user_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "apartment_or_house",
DROP COLUMN "district",
DROP COLUMN "image",
DROP COLUMN "number1",
ADD COLUMN     "number" DECIMAL(65,30) NOT NULL,
DROP COLUMN "phone",
ADD COLUMN     "phone" DECIMAL(65,30) NOT NULL;

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "adresses2";

-- DropTable
DROP TABLE "product_categories";

-- DropTable
DROP TABLE "relationsAdress2";

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "imagem" TEXT[],
    "size" TEXT[],
    "color" TEXT[],
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_categories" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "products_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_bar_code_key" ON "products"("bar_code");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
