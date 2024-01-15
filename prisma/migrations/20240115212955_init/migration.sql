-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "remuneration" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alert" TEXT,
    "jobType" TEXT NOT NULL,
    "status" TEXT
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastName" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
