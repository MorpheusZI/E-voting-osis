"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function updateOsis(id: number, userNISN: number, OsisID: number) { 
  const updtusr = await prisma.user.update({
    where: {
      id: id,
      NISN: userNISN,
    },
    data: {
      pilihan_osis: OsisID,
    },
  });
  if (updtusr) {
    console.log("yay");
  } else {
    console.log("nay");
  }
  return updtusr
}
