"use client";
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
	if (user?.pilihan_osis == 2) {
		userpicked = true;
	}
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);
	console.log(user);
	const handleUpdate = async () => {
		if (user) {
			const Oupdated = await updateOsis(user.id, user.NISN, OsisID);
			sessionStorage.setItem("user", JSON.stringify(Oupdated));
			console.log(user);
		}
		setTimeout(() => {
			router.push("/Home");
		}, 400);
	};
	return (
		<main className="h-full bg-gradient-to-b text-white from-cyan-400 via-blue-400 to-blues-100 sm:h-[80vh] gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw] flex">
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
						src={"/OSISimg/OSIS-3-1.jpg"}
						width={50}
						height={50}
						layout="responsive"
						className="mb-2 rounded-xl"></Image>
					<h1 className="my-6 sphone:text-xl text-3xl text-white">
						Farel Permana
					</h1>
				</div>
				<div className="flex sm:p-7 flex-col gap-[10vh] sphone:gap-5">
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Visi
						</h1>
						<p className="sphone:text-xl text-lg">
							Menjadikan Organisasi Siswa Intra Sekolah (OSIS) SMK Plus Pelita
							Nusantara yang respontif dalam mewadahi potensi, aspirasi, dan
							inspirasi siswa/i dalam berpikir kritis dan siap menghadapi era
							Revolusi Industri 4.0
						</p>
					</div>
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Misi
						</h1>
						<ul className="list-inside list-disc text-xl sphone:text-xl flex flex-col gap-6 sphone:gap-[5px]">
							<li>
								Menumbuhkan minat siswa/i SMK Plus Pelita Nusantara untuk
								mengikuti atau terlibat dalam setiap event atau perlombaan
								program kerja OSIS sesuai minat dan bakat.
							</li>
							<li>
								Meneruskan dan mengembangkan program kerja OSIS baik yang sudah
								terlaksana maupun yang belum terlaksana
							</li>
							<li>
								Membuat berbagai organisasi yang berada di SMK Plus Pelita
								Nusantara menjadi lebih bersinergi
							</li>
							<li>
								Selalu mendukung kegiatan positif baik dalam bidang akademik
								maupun non-akademik
							</li>
							<li>
								Mengembangkan prestasi siswa/i dalam bidang akademik maupun
								non-akademik.
							</li>
							<li>
								Meningkatkan Soft Skill siswa SMK Plus Pelita Nusantara Public
								Speaking, Bahasa, Management, dan Leadership
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
									<li>Memperingati Hari Besar Nasional dan Keagamaan.</li>
									<li>Pentas Seni Kreatif</li>
									<li>Merayakan HUT PGRI</li>
									<li>Mengadakan Pentas Seni dan porseni</li>
									<li>
										PORSENI (Pekan Olahraga Seni) Mengadakan PORSENI setelah
										Penilaian Akhir Tahun (PAT)
									</li>
								</ol>
							</li>
							<li>
								<span className="sphone:text-xl text-2xl">
									Jangka Panjang:{" "}
								</span>
								<ul className="pl-5 text-xl sphone:text-xl sphone:mt-0 mt-7 flex flex-col gap-4 sphone:gap-[5px]  space-y-1 list-decimal list-inside">
									<li>Melakukan program Study Banding</li>
									<li>
										PS (Patroli Siswa) Mengadakan patroli kedisiplinan dan
										kelengkapan atribut bersama tim guru Bimbingan Konseling.
									</li>
									<li>
										Membantu menyukseskan upacara bendera disetiap hari senin
										dan sabtu.
									</li>
									<li>
										Literasi Kitab Suci selama 30 menit di setiap Hari Jumat.
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex w-full mt-9 items-center justify-between self-end gap-5">
				<button
					onClick={handleUpdate}
					className="bg-cyan-400 font-semibold rounded-xl text-xl text-white px-3 sphone:px-8 py-3">
					Pilih saya!
				</button>
				<Link
					href={"/Home"}
					className=" bg-blues-100 border-white-100 border-2 font-semibold rounded-xl text-xl text-white px-5 sphone:px-10 py-[10px]">
					Kembali
				</Link>
			</div>
		</main>
	);
}
