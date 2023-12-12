-- CreateTable
CREATE TABLE "Events" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "eventInfoId" INTEGER NOT NULL,
    CONSTRAINT "Events_eventInfoId_fkey" FOREIGN KEY ("eventInfoId") REFERENCES "EventInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReoccuringEvents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "eventInfoId" INTEGER NOT NULL,
    CONSTRAINT "ReoccuringEvents_eventInfoId_fkey" FOREIGN KEY ("eventInfoId") REFERENCES "EventInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EventInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entry" TEXT NOT NULL,
    "prizes" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
