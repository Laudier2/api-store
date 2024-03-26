/*
  Warnings:

  - You are about to drop the column `imageDois` on the `comentarios` table. All the data in the column will be lost.
  - You are about to drop the column `imageQuantro` on the `comentarios` table. All the data in the column will be lost.
  - You are about to drop the column `imageSinco` on the `comentarios` table. All the data in the column will be lost.
  - You are about to drop the column `imageTres` on the `comentarios` table. All the data in the column will be lost.
  - You are about to drop the column `imageUm` on the `comentarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comentarios" DROP COLUMN "imageDois",
DROP COLUMN "imageQuantro",
DROP COLUMN "imageSinco",
DROP COLUMN "imageTres",
DROP COLUMN "imageUm",
ADD COLUMN     "image" TEXT[];
