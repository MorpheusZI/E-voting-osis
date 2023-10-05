"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient
import Cookies from "js-cookie";
export const handlelog = async (e:React.FormEvent) => {
    "use server"
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const datnama = formData.get("nama")?.toString();
    const datpassword = Number(formData.get("password"));
    const Ldata = await prisma.user.findFirst({
      where: {
        nama: datnama,
        NISN: datpassword,
      },
      select: {
        nama: true,
        NISN: true,
      },
    });

    if (Ldata) {
      Cookies.set('userData', JSON.stringify(Ldata));
    } else {
      console.log("nope");
    }
  };