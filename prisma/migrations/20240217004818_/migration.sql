-- CreateTable
CREATE TABLE "compra1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "apartment_or_house" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code_compra" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "productClolor" TEXT NOT NULL,
    "productQuantity" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "compra1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compra2" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "apartment_or_house" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code_compra" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "productClolor" TEXT NOT NULL,
    "productQuantity" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "compra2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compra3" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "apartment_or_house" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code_compra" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "productClolor" TEXT NOT NULL,
    "productQuantity" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "compra3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compra4" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "apartment_or_house" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code_compra" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "productClolor" TEXT NOT NULL,
    "productQuantity" TEXT NOT NULL,
    "productUrl" TEXT NOT NULL,

    CONSTRAINT "compra4_pkey" PRIMARY KEY ("id")
);
