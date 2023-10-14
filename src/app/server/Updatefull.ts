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
		console.log(
			"User ",
			updful.nama,
			" Submitted data with : " + "Kandidat Osis = " + updful.pilihan_osis,
			"Kandidat MPK = " + updful.pilihan_mpk
		);
	}
	return updful;
}
