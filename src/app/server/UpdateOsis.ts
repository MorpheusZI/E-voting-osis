"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function updateOsis(id: number, userNISN: number, OsisID: number) {
  await prisma.calon_osis.update({
    where: {
      osis_id: OsisID,
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
      pilihan_osis: OsisID,
    },
  });
  if (updtusr) {
    console.log("yay");
  } else {
    console.log("nay");
  }
  return(updtusr)
}
