/*
  Warnings:

  - Added the required column `estrela` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgName` to the `comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comentarios" ADD COLUMN     "estrela" TEXT NOT NULL,
ADD COLUMN     "imgName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "comentariorealations" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_comentario" TEXT NOT NULL,

    CONSTRAINT "comentariorealations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comentariorealations" ADD CONSTRAINT "comentariorealations_id_comentario_fkey" FOREIGN KEY ("id_comentario") REFERENCES "comentarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentariorealations" ADD CONSTRAINT "comentariorealations_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
