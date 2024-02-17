/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_A_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "title" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "_CategoryToProduct" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "ProductType" (
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "_ProductToProductType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductType_name_key" ON "ProductType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductType_AB_unique" ON "_ProductToProductType"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductType_B_index" ON "_ProductToProductType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "_ProductToProductType" ADD CONSTRAINT "_ProductToProductType_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductType" ADD CONSTRAINT "_ProductToProductType_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductType"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("name") ON DELETE CASCADE ON UPDATE CASCADE;
