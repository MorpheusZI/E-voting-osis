"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function updateMPK(id: number, userNISN: number, mpkID: number) {
  await prisma.calon_mpk.update({
    where: {
      mpk_id: mpkID,
    },
    data: {
      votes: {
        increment: 1,
      },
    },
  });
  const updtusr = await prisma.user.update({
    where: {
      id: id,
      NISN: userNISN,
    },
    data: {
      pilihan_mpk: mpkID,
    },
  });
  if (updtusr) {
    console.log("yay");
  } else {
    console.log("nay");
  }
}
