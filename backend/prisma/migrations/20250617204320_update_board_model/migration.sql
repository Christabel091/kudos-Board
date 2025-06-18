/*
  Warnings:

  - You are about to drop the column `description` on the `Boards` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Boards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Boards" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "Name" TEXT,
ADD COLUMN     "author" TEXT,
ADD COLUMN     "category" TEXT;
