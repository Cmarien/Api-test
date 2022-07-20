/*
  Warnings:

  - A unique constraint covering the columns `[unique_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `unique_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "unique_name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_unique_name_key" ON "User"("unique_name");
