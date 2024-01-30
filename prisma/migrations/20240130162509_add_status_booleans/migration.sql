/*
  Warnings:

  - You are about to drop the column `status` on the `Job` table. All the data in the column will be lost.
  - Added the required column `hiringMultiple` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urgentlyNeeded` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "remuneration" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alert" TEXT,
    "jobType" TEXT NOT NULL,
    "urgentlyNeeded" BOOLEAN NOT NULL,
    "hiringMultiple" BOOLEAN NOT NULL
);
INSERT INTO "new_Job" ("alert", "description", "id", "jobType", "location", "remuneration", "title") SELECT "alert", "description", "id", "jobType", "location", "remuneration", "title" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
