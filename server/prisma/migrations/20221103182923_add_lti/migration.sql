-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lmsEmail" TEXT,
ADD COLUMN     "lmsUserId" TEXT;

-- CreateTable
CREATE TABLE "LTILaunch" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "config" JSONB NOT NULL,

    CONSTRAINT "LTILaunch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nonce" (
    "id" SERIAL NOT NULL,
    "nonce" TEXT NOT NULL,

    CONSTRAINT "Nonce_pkey" PRIMARY KEY ("id")
);
