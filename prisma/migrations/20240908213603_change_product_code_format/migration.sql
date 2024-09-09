/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "orderProducts" DROP CONSTRAINT "orderProducts_productCode_fkey";

-- AlterTable
ALTER TABLE "orderProducts" ALTER COLUMN "productCode" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ALTER COLUMN "productCode" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("productCode");

-- AddForeignKey
ALTER TABLE "orderProducts" ADD CONSTRAINT "orderProducts_productCode_fkey" FOREIGN KEY ("productCode") REFERENCES "products"("productCode") ON DELETE RESTRICT ON UPDATE CASCADE;
