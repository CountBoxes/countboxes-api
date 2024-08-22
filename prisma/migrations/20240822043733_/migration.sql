-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('ABERTO', 'CARREGADO', 'EM_TRANSITO', 'ENTREGUE', 'CANCELADO', 'DEVOLVIDO');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('CARREGAMENTO', 'DESCARREGAMENTO');

-- CreateEnum
CREATE TYPE "LoadStatus" AS ENUM ('PENDENTE', 'AGENDADO', 'CARREGANDO', 'CARREGADO', 'EM_TRANSITO', 'ENTREGUE', 'CANCELADO', 'RETORNADO');

-- CreateTable
CREATE TABLE "users" (
    "userCode" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userCode")
);

-- CreateTable
CREATE TABLE "products" (
    "productCode" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "grossWeight" DOUBLE PRECISION NOT NULL,
    "netWeight" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("productCode")
);

-- CreateTable
CREATE TABLE "orders" (
    "orderCode" SERIAL NOT NULL,
    "clientCode" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "shipping" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("orderCode")
);

-- CreateTable
CREATE TABLE "orderProducts" (
    "orderProductCode" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productCode" INTEGER NOT NULL,
    "orderCode" INTEGER NOT NULL,

    CONSTRAINT "orderProducts_pkey" PRIMARY KEY ("orderProductCode")
);

-- CreateTable
CREATE TABLE "transactions" (
    "transactionCode" SERIAL NOT NULL,
    "transactionCategory" "TransactionCategory" NOT NULL,
    "orderProductCode" INTEGER NOT NULL,
    "orderCode" INTEGER NOT NULL,
    "userCode" INTEGER NOT NULL,
    "loadCode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("transactionCode")
);

-- CreateTable
CREATE TABLE "clients" (
    "clientCode" SERIAL NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("clientCode")
);

-- CreateTable
CREATE TABLE "loads" (
    "loadCode" SERIAL NOT NULL,
    "orderCode" INTEGER NOT NULL,
    "vehicleCode" INTEGER NOT NULL,
    "status" "LoadStatus" NOT NULL,
    "userCode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loads_pkey" PRIMARY KEY ("loadCode")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "vehicleCode" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("vehicleCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_productCode_key" ON "products"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "clients_CNPJ_key" ON "clients"("CNPJ");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_plate_key" ON "vehicles"("plate");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientCode_fkey" FOREIGN KEY ("clientCode") REFERENCES "clients"("clientCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProducts" ADD CONSTRAINT "orderProducts_productCode_fkey" FOREIGN KEY ("productCode") REFERENCES "products"("productCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProducts" ADD CONSTRAINT "orderProducts_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "orders"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_orderProductCode_fkey" FOREIGN KEY ("orderProductCode") REFERENCES "orderProducts"("orderProductCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "orders"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "users"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_loadCode_fkey" FOREIGN KEY ("loadCode") REFERENCES "loads"("loadCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loads" ADD CONSTRAINT "loads_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "orders"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loads" ADD CONSTRAINT "loads_vehicleCode_fkey" FOREIGN KEY ("vehicleCode") REFERENCES "vehicles"("vehicleCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loads" ADD CONSTRAINT "loads_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "users"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;
