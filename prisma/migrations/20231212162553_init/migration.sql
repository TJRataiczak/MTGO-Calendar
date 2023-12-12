/*
  Warnings:

  - Added the required column `type` to the `EventInfo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "entry" TEXT NOT NULL,
    "prizes" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_EventInfo" ("description", "entry", "id", "prizes") SELECT "description", "entry", "id", "prizes" FROM "EventInfo";
DROP TABLE "EventInfo";
ALTER TABLE "new_EventInfo" RENAME TO "EventInfo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
