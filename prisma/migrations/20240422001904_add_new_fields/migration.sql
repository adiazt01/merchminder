/*
  Warnings:

  - Added the required column `userId` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_client" ("createdAt", "email", "id", "name", "phone", "updatedAt") SELECT "createdAt", "email", "id", "name", "phone", "updatedAt" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
