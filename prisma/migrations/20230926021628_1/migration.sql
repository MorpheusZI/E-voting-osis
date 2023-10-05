-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "tanggal_lahir" INTEGER NOT NULL,
    "pilihan_mpk" INTEGER NOT NULL,
    "pilihan_osis" INTEGER NOT NULL,
    "isvoted" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calon_mpk" (
    "mpk_id" SERIAL NOT NULL,
    "nama_ketua" VARCHAR(255) NOT NULL,
    "nama_wakil" VARCHAR NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "calon_mpk_pkey" PRIMARY KEY ("mpk_id")
);

-- CreateTable
CREATE TABLE "calon_osis" (
    "osis_id" SERIAL NOT NULL,
    "nama_ketua" VARCHAR(255) NOT NULL,
    "nama_wakil" VARCHAR(255) NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "calon_osis_pkey" PRIMARY KEY ("osis_id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_pilihan_mpk_fkey" FOREIGN KEY ("pilihan_mpk") REFERENCES "calon_mpk"("mpk_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_pilihan_osis_fkey" FOREIGN KEY ("pilihan_osis") REFERENCES "calon_osis"("osis_id") ON DELETE RESTRICT ON UPDATE CASCADE;
