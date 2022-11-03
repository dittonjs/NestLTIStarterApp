/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `LTILaunch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lmsUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LTILaunch_token_key" ON "LTILaunch"("token");

-- CreateIndex
CREATE UNIQUE INDEX "User_lmsUserId_key" ON "User"("lmsUserId");
