/*
  Warnings:

  - You are about to drop the column `id` on the `Stats` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Stats_id_key";

-- AlterTable
ALTER TABLE "Stats" DROP COLUMN "id";
