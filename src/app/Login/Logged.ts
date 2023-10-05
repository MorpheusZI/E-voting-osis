"use server"
import { Prisma, PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient;
interface userdata{
  nama: string;
  NISN: number;
}

let Ldata: userdata | null = null;

export async function Logged(fdata: FormData) {
  const datnama = fdata.get("Username") ?.toString()
  const datpassword = Number(fdata.get("password"))
  let passwordcorrect:boolean = false;
  const Ldata = await prisma.user.findFirst({
    where: {
      nama: datnama,
      NISN: datpassword
    },
    select: {
      nama: true,
      NISN:true
    }
  })
  if (Ldata) {
    passwordcorrect = true;
    console.log("yep")
  } else {
    passwordcorrect = false
    console.log("nop")
  }
  (passwordcorrect) ? redirect('/') : redirect('/Login/Loginerror');
}
export {Ldata}