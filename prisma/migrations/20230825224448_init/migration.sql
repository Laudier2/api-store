/*
  Warnings:

  - You are about to drop the `products_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products_categories" DROP CONSTRAINT "products_categories_id_category_fkey";

-- DropForeignKey
ALTER TABLE "products_categories" DROP CONSTRAINT "products_categories_id_product_fkey";

-- DropTable
DROP TABLE "products_categories";

-- CreateTable
CREATE TABLE "adress" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category_relations" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "product_category_relations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Adress" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_adress" TEXT NOT NULL,

    CONSTRAINT "User_Adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_category_relations" ADD CONSTRAINT "product_category_relations_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_category_relations" ADD CONSTRAINT "product_category_relations_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Adress" ADD CONSTRAINT "User_Adress_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Adress" ADD CONSTRAINT "User_Adress_id_adress_fkey" FOREIGN KEY ("id_adress") REFERENCES "adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
