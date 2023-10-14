"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handlelog(Fdata: FormData) {
	const currentdate = new Date();
	const namedat = Fdata.get("nama")?.toString();
	const passdat = Number(Fdata.get("password"));
	const Ldata = await prisma.user.findFirst({
		where: {
			nama: namedat,
			NISN: passdat,
		},
	});
	Ldata
		? console.log(
				"Username: " + Ldata.nama,
				",",
				"Time of Login: " +
					currentdate.getDate() +
					"/" +
					currentdate.getHours() +
					":" +
					currentdate.getMinutes() +
					":" +
					currentdate.getSeconds() +
					"."
		  )
		: console.log("user failed to log in.");
	return Ldata;
}
