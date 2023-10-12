"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateMPK } from "@/app/server/UpdateMPK";
interface user {
	id: number;
	nama: string;
	isVoted: boolean;
	NISN: number;
}

export default function Osis1() {
	const [user, setUser] = useState<user | null>(null);
	const router = useRouter();
	const OsisID: number = 3;
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [20000]);
	console.log(user);
	const handleUpdate = async () => {
		if (user) {
			const Oupdated = await updateMPK(user.id, user.NISN, OsisID);
			sessionStorage.setItem("user", JSON.stringify(Oupdated));
			console.log(user);
		}
		setTimeout(() => {
			router.push("/Home");
		}, 400);
	};
	return (
		<div className="h-full bg-gradient-to-b text-white from-crimson-100 via-crimson-200 to-crimson-300 sm:h-[80vh] gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw] flex">
			<div className="flex flex-row mb-4 w-full items-center justify-between">
				<Link href={"/Home"} className="align-center text-md font-bold">
					{" "}
					Kembali
				</Link>
				<Image
					alt="Osis"
					src={"/MPKimg/MPKlogo.png"}
					height={90}
					width={90}></Image>
			</div>
			<div className="flex flex-col w-full items-center sm:w-[80vw] sm:h-full">
				<Image
					alt="Kandidat 3"
					src={"/MPKimg/MPK-3-2.jpg"}
					width={50}
					height={50}
					layout="responsive"
					className="mb-2 rounded-xl"></Image>
				<h1 className="my-6 text-xl font-bold sphone:text-3xl text-slate-50">
					Zusril Indah Bramanta
				</h1>
			</div>
			<div className="flex sm:p-7 flex-col gap-[10vh]">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Visi</h1>
					<p className="text-lg ">
						Menjadi organisasi unggulan dalam mengembangkan potensi, aspirasi,
						minat dan bakat peserta didik dalam menjawab tantangan global.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Misi</h1>
					<ul className="list-inside list-disc text-lg flex flex-col gap-[2rem]">
						<li>Mengoptimalkan sistem administrasi.</li>
						<li>
							Memberikan bimbingan dan motivasi kepada siswa untuk mencapai
							prestasi yang maksimal.
						</li>
						<li>
							Membangun hubungan, koordinasi dan sinkronisasi informasi dengan
							guru dan siswa sekolah.
						</li>
						<li>
							Merealisasikan anggota MPK/OSIS yang berkompetensi di bidang
							kepemimpinan dan keorganisasian.
						</li>
						<li>
							Meningkatkan soft skill pelajar (public speaking, bahasa,
							management, leadership)
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Program Kerja</h1>
					<ul className="space-y-4 mt-3 flex flex-col gap-4 list-disc list-inside dark:text-gray-400">
						<li>
							<span className="text-2xl">Jangka Pendek: </span>
							<ol className="pl-5 text-lg flex-col flex gap-4 mt-2 space-y-1 list-decimal list-inside">
								<li>Melakukan pengawasan terhadap ekskul dan talent</li>
								<li>
									Merancang peraturan mengenai pengrekrutan calon pengurus
									MPK/OSIS;
								</li>
								<li>Mengadakan rapat antar bph MPK dan OSIS</li>
								<li>Membuat peraturan mengenai calon pengurus MPK dan OSIS</li>
								<li>
									Memberi rekomendasi mengenai perlombaan untuk ekstrakurikuler
									dan talent day .
								</li>
							</ol>
						</li>
						<li>
							<span className="text-2xl">Jangka Panjang:</span>
							<ul className="pl-5 text-lg flex flex-col gap-4  mt-2 space-y-1 list-decimal list-inside">
								<li>Mengadakan sidang PLENO ;</li>
								<li>Mengadakan Komisi Pemilihan Umum [KPU]</li>
								<li>Mengadakan Musyawarah Besar [MUBES]</li>
								<li>Mengadakan Musyawarah Kerja [MUKER]</li>
								<li>Mengadakan Laporan Pertanggung Jawaban (LPJ)</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex w-full items-center mt-4 justify-between self-end gap-5">
				<button
					onClick={handleUpdate}
					className="bg-red-400 font-semibold rounded-xl text-xl text-white px-3 sphone:px-8 py-3">
					Pilih saya!
				</button>
				<Link
					href={"/Home"}
					className=" bg-transparent border-white-100 border-2 font-semibold rounded-xl text-xl text-white px-5 sphone:px-10 py-[10px]">
					Kembali
				</Link>
			</div>
		</div>
	);
}
