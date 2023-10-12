"use server";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function fullFil(Uid: number, Unama: string) {
	const updful = await prisma.user.update({
		where: {
			id: Uid,
			nama: Unama,
		},
		data: {
			isvoted: true,
		},
	});
	if (updful) {
		console.log("yok bisa yok");
	}
	return updful;
}
