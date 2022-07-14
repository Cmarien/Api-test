/*
  Warnings:

  - A unique constraint covering the columns `[friends]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "friends" INTEGER[],
ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Stats" (
    "id" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "ladder_level" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Stats_id_key" ON "Stats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stats_UserId_key" ON "Stats"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_friends_key" ON "User"("friends");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;
