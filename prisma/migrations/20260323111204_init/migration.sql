-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL UNIQUE,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_userId_fkey"
    FOREIGN KEY ("userId")
    REFERENCES "User" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    CONSTRAINT "Message_roomId_fkey"
    FOREIGN KEY ("roomId")
    REFERENCES "Room" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
