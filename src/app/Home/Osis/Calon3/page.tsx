"use client";
import { updateOsis } from "@/app/server/UpdateOsis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

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
	}, [2000]);
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
		<div className="h-full sm:h-[80vh] bg-gradient-to-b from-cyan-400 via-blue-400 to-blues-100 text-white gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw] flex">
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
			<div className="flex flex-col w-full items-center sm:w-[80vw] sm:h-full">
				<Image
					alt="Kandidat 3"
					src={"/OSISimg/OSIS-3-1.jpg"}
					width={50}
					height={50}
					layout="responsive"
					className="mb-2 rounded-xl"></Image>
				<h1 className="my-6 text-3xl text-white">Farel Permana</h1>
			</div>
			<div className="flex sm:p-7 flex-col gap-[10vh]">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Visi</h1>
					<p className="text-lg ">
						Menjadikan Organisasi Siswa Intra Sekolah (OSIS) SMK Plus Pelita
						Nusantara yang respontif dalam mewadahi potensi, aspirasi, dan
						inspirasi siswa/i dalam berpikir kritis dan siap menghadapi era
						Revolusi Industri 4.0
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Misi</h1>
					<ul className="list-inside list-disc text-lg flex flex-col gap-[2rem]">
						<li>
							Menumbuhkan minat siswa/i SMK Plus Pelita Nusantara untuk
							mengikuti atau terlibat dalam setiap event atau perlombaan program
							kerja OSIS sesuai minat dan bakat.
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
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Program Kerja</h1>
					<ul className="space-y-4 mt-3 flex flex-col gap-4 list-disc list-inside dark:text-gray-400">
						<li>
							<span className="text-2xl">Jangka Pendek:</span>
							<ul className="pl-5 text-lg flex flex-col gap-4  mt-2 space-y-1 list-decimal list-inside">
								<li>Memperingati Hari Besar Nasional dan Keagamaan.</li>
								<li>Pentas Seni Kreatif</li>
								<li>Merayakan HUT PGRI</li>
								<li>
									PORSENI (Pekan Olahraga Seni) <br /> Mengadakan PORSENI
									setelah Penilaian Akhir Tahun (PAT)
								</li>
							</ul>
						</li>
						<li>
							<span className="text-2xl">Jangka Panjang: </span>
							<ol className="pl-5 text-lg flex-col flex gap-4 mt-2 space-y-1 list-decimal list-inside">
								<li>Melakukan program Study Banding</li>
								<li>
									PS (Patroli Siswa) Mengadakan patroli kedisiplinan dan
									kelengkapan atribut bersama tim guru Bimbingan Konseling.{" "}
								</li>

								<li>
									Membantu menyukseskan upacara bendera disetiap hari senin dan
									sabtu.
								</li>
								<li>
									Literasi Kitab Suci selama 30 menit di setiap Hari Jumat.
								</li>
							</ol>
						</li>
					</ul>
				</div>
				<div className="flex w-full items-center justify-between self-end gap-5">
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
			</div>
		</div>
	);
}
