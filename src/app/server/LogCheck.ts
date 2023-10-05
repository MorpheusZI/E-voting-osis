"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handlelog(Fdata: FormData) {
  "use server";
  const namedat = Fdata.get("nama")?.toString();
  const passdat = Number(Fdata.get("password"));
  const Ldata = await prisma.user.findFirst({
    where: {
      nama: namedat,
      NISN: passdat,
    }, 
  });
  Ldata ? console.log("yep") : console.log("nope");
  return Ldata;
}