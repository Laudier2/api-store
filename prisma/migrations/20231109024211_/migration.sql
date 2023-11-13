/*
  Warnings:

  - A unique constraint covering the columns `[age]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_age_key" ON "users"("age");
