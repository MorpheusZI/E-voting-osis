/*
  Warnings:

  - You are about to drop the column `nama_wakil` on the `calon_mpk` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `calon_mpk` table. All the data in the column will be lost.
  - You are about to drop the column `nama_wakil` on the `calon_osis` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `calon_osis` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_lahir` on the `user` table. All the data in the column will be lost.
  - Added the required column `NISN` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calon_mpk" DROP COLUMN "nama_wakil",
DROP COLUMN "votes";

-- AlterTable
ALTER TABLE "calon_osis" DROP COLUMN "nama_wakil",
DROP COLUMN "votes";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "tanggal_lahir",
ADD COLUMN     "NISN" INTEGER NOT NULL;
