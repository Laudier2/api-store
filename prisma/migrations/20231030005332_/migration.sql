/*
  Warnings:

  - You are about to drop the column `name` on the `adress` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `adress` table. All the data in the column will be lost.
  - Added the required column `access` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adress" DROP COLUMN "name",
DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "access" TEXT NOT NULL,
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
