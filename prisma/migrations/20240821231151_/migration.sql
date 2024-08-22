/*
  Warnings:

  - You are about to drop the column `loaded` on the `Load` table. All the data in the column will be lost.
  - You are about to drop the `Loading` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `status` on the `Load` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('ABERTO', 'CARREGADO', 'EM_TRANSITO', 'ENTREGUE', 'CANCELADO', 'DEVOLVIDO');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('CARREGAMENTO', 'DESCARREGAMENTO');

-- CreateEnum
CREATE TYPE "LoadStatus" AS ENUM ('PENDENTE', 'AGENDADO', 'CARREGANDO', 'CARREGADO', 'EM_TRANSITO', 'ENTREGUE', 'CANCELADO', 'RETORNADO');

-- DropForeignKey
ALTER TABLE "Loading" DROP CONSTRAINT "Loading_orderCode_fkey";

-- DropForeignKey
ALTER TABLE "Loading" DROP CONSTRAINT "Loading_orderProductCode_fkey";

-- DropForeignKey
ALTER TABLE "Loading" DROP CONSTRAINT "Loading_userCode_fkey";

-- AlterTable
ALTER TABLE "Load" DROP COLUMN "loaded",
DROP COLUMN "status",
ADD COLUMN     "status" "LoadStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "OrderStatus" NOT NULL;

-- DropTable
DROP TABLE "Loading";

-- CreateTable
CREATE TABLE "Transaction" (
    "transactionCode" SERIAL NOT NULL,
    "transactionCategory" "TransactionCategory" NOT NULL,
    "orderProductCode" INTEGER NOT NULL,
    "orderCode" INTEGER NOT NULL,
    "userCode" INTEGER NOT NULL,
    "loadCode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("transactionCode")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_orderProductCode_fkey" FOREIGN KEY ("orderProductCode") REFERENCES "OrderProduct"("orderProductCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "Order"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "users"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_loadCode_fkey" FOREIGN KEY ("loadCode") REFERENCES "Load"("loadCode") ON DELETE RESTRICT ON UPDATE CASCADE;
