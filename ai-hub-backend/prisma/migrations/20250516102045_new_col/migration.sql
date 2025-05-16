/*
  Warnings:

  - Added the required column `created_by_email` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL DEFAULT '',
    "content" JSONB NOT NULL,
    "img1" TEXT NOT NULL,
    "img1_id" TEXT,
    "img2" TEXT NOT NULL,
    "img2_id" TEXT,
    "img3" TEXT NOT NULL,
    "img3_id" TEXT,
    "img4" TEXT NOT NULL,
    "img4_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL DEFAULT '',
    "created_by_email" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Course_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("content", "created_at", "created_by", "id", "img1", "img1_id", "img2", "img2_id", "img3", "img3_id", "img4", "img4_id", "note", "title", "user_id") SELECT "content", "created_at", "created_by", "id", "img1", "img1_id", "img2", "img2_id", "img3", "img3_id", "img4", "img4_id", "note", "title", "user_id" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
