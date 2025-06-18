-- CreateTable
CREATE TABLE "Boards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Boards_pkey" PRIMARY KEY ("id")
);
