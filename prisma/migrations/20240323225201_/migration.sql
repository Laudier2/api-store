/*
  Warnings:

  - You are about to drop the column `image` on the `comentarios` table. All the data in the column will be lost.
  - Added the required column `idProduct` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageDois` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageQuantro` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSinco` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageTres` to the `comentarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUm` to the `comentarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comentarios" DROP COLUMN "image",
ADD COLUMN     "idProduct" TEXT NOT NULL,
ADD COLUMN     "imageDois" TEXT NOT NULL,
ADD COLUMN     "imageQuantro" TEXT NOT NULL,
ADD COLUMN     "imageSinco" TEXT NOT NULL,
ADD COLUMN     "imageTres" TEXT NOT NULL,
ADD COLUMN     "imageUm" TEXT NOT NULL;
