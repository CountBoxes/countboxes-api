/*
  Warnings:

  - You are about to drop the column `cuttingType` on the `products` table. All the data in the column will be lost.
  - Added the required column `cuttingTypeId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "cuttingType",
ADD COLUMN     "cuttingTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CuttingType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "CuttingType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_cuttingTypeId_fkey" FOREIGN KEY ("cuttingTypeId") REFERENCES "CuttingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
