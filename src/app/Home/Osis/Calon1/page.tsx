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
	const OsisID: number = 1;
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
			const Oupdated = await updateOsis(user.id, user.NISN, OsisID);
			sessionStorage.setItem("user", JSON.stringify(Oupdated));
			console.log(user);
		}
		setTimeout(() => {
			router.push("/Home");
		}, 400);
	};
	return (
		<div className="h-full bg-gradient-to-b text-white from-cyan-400 via-blue-400 to-blues-100 sm:h-[80vh] gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw] flex">
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
					alt="Kandidat 1"
					src={"/OSISimg/OSIS-1-1.jpg"}
					width={50}
					height={50}
					layout="responsive"
					className="mb-2 rounded-xl"></Image>
				<h1 className="my-6 text-3xl text-slate-50">Dionisius Kraeng</h1>
			</div>
			<div className="flex items-center sm:p-7 flex-col gap-[10vh]">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Visi</h1>
					<p className="text-lg ">
						Menciptakan osis yang demokratis dan mewadahi serta mengayomi
						siswa/siswi dalam berkembang, berkarya, berinovasi dan berprestasi
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Misi</h1>
					<ul className="list-inside list-disc text-lg flex flex-col gap-[2rem]">
						<li>
							Meningkatkan kualitas sumber daya manusia di lingkungan SMK Plus
							Pelita Nusantara
						</li>
						<li>
							Menumbuhkan karakter siswa/siswi yang memiliki semangat muda
							tinggi
						</li>
						<li>
							Membuat berbagai organisasi yang berada di SMK Plus Pelita
							Nusantara menjadi lebih bersinergi{" "}
						</li>
						<li>
							Meneruskan dan mengembangkan program kerja OSIS baik yang telah
							terlaksana maupun yang belum terlaksana
						</li>
						<li>
							Mengembangkan identitas SMK Plus Pelita Nusantara sebagai sekolah
							IT dengan membuat program kegiatan yang berkualitas
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold underline">Program Kerja</h1>
					<ul className="space-y-4 mt-3 flex flex-col gap-4 list-disc list-inside dark:text-gray-400">
						<li>
							<span className="text-2xl">Jangka Pendek: </span>
							<ol className="pl-5 text-lg flex-col flex gap-4 mt-2 space-y-1 list-decimal list-inside">
								<li>
									Membantu menyukseskan upacara bendera disetiap hari senin
								</li>
								<li>
									Mengadakan hubungan kerja sama dengan organisasi,
									ekstrakulikuler dan talent day yang lain
								</li>
								<li>Mengadakan turnamen E-sport</li>
								<li>Mengadakan Pentas Seni dan porseni</li>
								<li>
									ikut serta dalam setiap pelaksanaan program kerja sekolah yang
									sedang dilaksanakan
								</li>
							</ol>
						</li>
						<li>
							<span className="text-2xl">Jangka Panjang:</span>
							<ul className="pl-5 text-lg flex flex-col gap-4  mt-2 space-y-1 list-decimal list-inside">
								<li>memperingati hari besar nasional dan keagamaan</li>
								<li>mengadakan talend day E-sport</li>
								<li>memainkan lagu nasional pada jam istirahat</li>
							</ul>
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
