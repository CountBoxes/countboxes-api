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
CREATE TABLE "Order" (
    "orderCode" SERIAL NOT NULL,
    "shipping" DOUBLE PRECISION NOT NULL,
    "adress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientCode" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderCode")
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "orderProductCode" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productCode" INTEGER NOT NULL,
    "orderCode" INTEGER NOT NULL,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("orderProductCode")
);

-- CreateTable
CREATE TABLE "Loading" (
    "loadingCode" SERIAL NOT NULL,
    "quantityLoaded" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userCode" INTEGER NOT NULL,
    "orderProductCode" INTEGER NOT NULL,
    "orderCode" INTEGER NOT NULL,

    CONSTRAINT "Loading_pkey" PRIMARY KEY ("loadingCode")
);

-- CreateTable
CREATE TABLE "Client" (
    "clientCode" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adressCode" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("clientCode")
);

-- CreateTable
CREATE TABLE "Adress" (
    "adressCode" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("adressCode")
);

-- CreateTable
CREATE TABLE "Load" (
    "loadCode" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "loaded" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderCode" INTEGER NOT NULL,
    "vehicleCode" INTEGER NOT NULL,
    "userCode" INTEGER NOT NULL,

    CONSTRAINT "Load_pkey" PRIMARY KEY ("loadCode")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "vehicleCode" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vehicleCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_productCode_key" ON "products"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "Client_CNPJ_key" ON "Client"("CNPJ");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientCode_fkey" FOREIGN KEY ("clientCode") REFERENCES "Client"("clientCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_productCode_fkey" FOREIGN KEY ("productCode") REFERENCES "products"("productCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "Order"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loading" ADD CONSTRAINT "Loading_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "users"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loading" ADD CONSTRAINT "Loading_orderProductCode_fkey" FOREIGN KEY ("orderProductCode") REFERENCES "OrderProduct"("orderProductCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loading" ADD CONSTRAINT "Loading_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "Order"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_adressCode_fkey" FOREIGN KEY ("adressCode") REFERENCES "Adress"("adressCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Load" ADD CONSTRAINT "Load_orderCode_fkey" FOREIGN KEY ("orderCode") REFERENCES "Order"("orderCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Load" ADD CONSTRAINT "Load_vehicleCode_fkey" FOREIGN KEY ("vehicleCode") REFERENCES "Vehicle"("vehicleCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Load" ADD CONSTRAINT "Load_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "users"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;
