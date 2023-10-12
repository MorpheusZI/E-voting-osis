"use client";
import { updateMPK } from "@/app/server/UpdateMPK";
import { updateOsis } from "@/app/server/UpdateOsis";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface user {
	id: number;
	nama: string;
	isVoted: boolean;
	pilihan_osis: number;
	NISN: number;
}

export default function Osis1() {
	const [user, setUser] = useState<user | null>(null);
	const router = useRouter();
	let userpicked: boolean;
	const OsisID: number = 3;
	userpicked = false;
	if (user?.pilihan_osis == 3) {
		userpicked = true;
	}
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [1000]);
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
		<main className="h-full bg-gradient-to-b text-white from-red-700 via-crimson-100 to-crimson-200 sm:h-[80vh] gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw] flex">
			<div className="flex flex-row mb-4 w-full items-center justify-between">
				<Link href={"/Home"} className="align-center text-md font-bold">
					{" "}
					Kembali
				</Link>
				<Image
					alt="Osis"
					src={"/OSISimg/OSISlogo.png"}
					height={50}
					width={50}></Image>
			</div>
			<div className="flex flex-col sphone:flex-row gap-[3rem]">
				<div className="flex flex-col w-full items-center sphone:w-[60%] sm:h-full">
					<Image
						alt="Kandidat 1"
						src={"/MPKimg/MPK-3-2.jpg"}
						width={50}
						height={50}
						layout="responsive"
						className="mb-2 rounded-xl"></Image>
					<h1 className="my-6 sphone:text-xl text-3xl text-white">
						Zusril Indah Bramanta
					</h1>
				</div>
				<div className="flex sm:p-7 flex-col gap-[10vh] sphone:gap-5">
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Visi
						</h1>
						<p className="sphone:text-xl text-lg">
							Menjadi organisasi unggulan dalam mengembangkan potensi, aspirasi,
							minat dan bakat peserta didik dalam menjawab tantangan global.
						</p>
					</div>
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Misi
						</h1>
						<ul className="list-inside list-disc text-xl sphone:text-xl flex flex-col gap-6 sphone:gap-[5px]">
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
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Program Kerja
						</h1>
						<ul className="space-y-4 mt-3 flex flex-col gap-4 sphone:gap-[5px] list-disc list-inside">
							<li>
								<span className="sphone:text-xl text-2xl">Jangka Pendek: </span>
								<ol className="pl-5 text-xl sphone:text-xl sphone:mt-0 mt-7 flex-col flex gap-4 sphone:gap-[5px]  space-y-1 list-decimal list-inside">
									<li>Melakukan pengawasan terhadap ekskul dan talent</li>
									<li>
										Merancang peraturan mengenai pengrekrutan calon pengurus
										MPK/OSIS;
									</li>
									<li>Mengadakan rapat antar bph MPK dan OSIS</li>
									<li>
										Membuat peraturan mengenai calon pengurus MPK dan OSIS
									</li>
									<li>
										Memberi rekomendasi mengenai perlombaan untuk
										ekstrakurikuler dan talent day .
									</li>
								</ol>
							</li>
							<li>
								<span className="sphone:text-xl text-2xl">
									Jangka Panjang:{" "}
								</span>
								<ul className="pl-5 text-xl sphone:text-xl sphone:mt-0 mt-7 flex flex-col gap-4 sphone:gap-[5px]  space-y-1 list-decimal list-inside">
									<li>Mengadakan Musyawarah Kerja (MUKER);</li>
									<li>Mengadakan Musyawarah Besar (MUBES)</li>
									<li>Mengadakan Komisi Pemilihan Umum (KPU)</li>
									<li> Mengadakan sidang PLENO ; </li>
									<li>Mengadakan Laporan Pertanggung Jawaban (LPJ)</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex w-full mt-9 items-center justify-between self-end gap-5">
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
		</main>
	);
}
