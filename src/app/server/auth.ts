// server/auth.ts
"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function authenticateUser(nama: string, NISN: number) {
  try {
    const user = await prisma.user.findFirst({
      select: {
        nama:true,
        NISN:true
        },
        where: {
            nama: nama,
            NISN: NISN,
        }
    });

    return user;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
}
