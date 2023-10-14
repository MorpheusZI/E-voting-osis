"use server";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export async function HNvoted() {
	const Nvoted = await prisma.user.findMany({
		where: {
			isvoted: false,
		},
		select: {
			id: true,
			nama: true,
			NISN: true,
		},
	});
	return Nvoted;
}

export async function Voted() {
	const voted = await prisma.user.findMany({
		where: {
			isvoted: true,
		},
	});
	return voted.length;
}

export async function O1votes() {
	const O1votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_osis: 1,
		},
	});
	return O1votes.length;
}

export async function O2votes() {
	const O2votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_osis: 2,
		},
	});
	return O2votes.length;
}

export async function O3votes() {
	const O3votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_osis: 3,
		},
	});
	return O3votes.length;
}

export async function M1votes() {
	const M1votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_mpk: 1,
		},
	});
	return M1votes.length;
}
export async function M2votes() {
	const M2votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_mpk: 2,
		},
	});
	return M2votes.length;
}
export async function M3votes() {
	const M3votes = await prisma.user.findMany({
		where: {
			isvoted: true,
			pilihan_mpk: 3,
		},
	});
	return M3votes.length;
}
