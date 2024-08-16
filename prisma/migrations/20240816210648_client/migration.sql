/*
  Warnings:

  - You are about to drop the column `adressCode` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `Adress` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_adressCode_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "adressCode",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;

-- DropTable
DROP TABLE "Adress";
