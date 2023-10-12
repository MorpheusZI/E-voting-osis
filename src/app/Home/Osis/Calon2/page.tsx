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
	const OsisID: number = 2;
	userpicked = false;
	if (user?.pilihan_osis == 2) {
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
						src={"/OSISimg/OSIS-2-1.jpg"}
						width={50}
						height={50}
						layout="responsive"
						className="mb-2 rounded-xl"></Image>
					<h1 className="my-6 sphone:text-xl text-3xl text-white">
						Anita Widayanti
					</h1>
				</div>
				<div className="flex sm:p-7 flex-col gap-[10vh] sphone:gap-5">
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Visi
						</h1>
						<p className="sphone:text-xl text-lg">
							Mengoptimalkan OSIS SMK Plus Pelita Nusantara dalam mewadahi
							siswa/I untuk meningkatkan integritas, inspirasi, inovasi, demi
							terbentuknya pelajar yang kompeten, konsisten dan kreatif.
						</p>
					</div>
					<div className="flex flex-col gap-2 sphone:gap-none">
						<h1 className="sphone:text-xl text-3xl font-bold underline">
							Misi
						</h1>
						<ul className="list-inside list-disc text-xl sphone:text-xl flex flex-col gap-6 sphone:gap-[5px]">
							<li>
								Meningkatkan keimanan dan ketaqwaan siswa/i terhadap Tuhan Yang
								Maha Esa.
							</li>
							<li>
								Merealisasikan aspirasi siswa/i yang telah disampaikan MPK.
							</li>
							<li>
								Menegakkan nilai-nilai etika, kejujuran, dan kedisplinan di
								kalangan siswa/i serta menjadi contoh teladan dalam berperilaku
								di lingkungan sekolah.
							</li>
							<li>
								Terlibat aktif dalam pembangunan dan pengembangan sekolah serta
								memberikan kontribusi positif dalam meningkatkan citra dan
								prestasi sekolah.
							</li>
							<li>
								Meningkatkan soft skill pelajar ( public speaking, bahasa,
								management, leadership )
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
									<li>Penus Magazine (PenZine)</li>
									<li>Pesta Pora Rakyat Penus (Perporan)</li>
									<li>Pensi</li>
									<li> Membentuk PDS (Penegak Disiplin Siswa)</li>
								</ol>
							</li>
							<li>
								<span className="sphone:text-xl text-2xl">
									Jangka Panjang:{" "}
								</span>
								<ul className="pl-5 text-xl sphone:text-xl sphone:mt-0 mt-7 flex flex-col gap-4 sphone:gap-[5px]  space-y-1 list-decimal list-inside">
									<li>
										Memperingati hari besar agama, nasional, dan hari besar
										lainnya yang sifatnya harus diperingati.
									</li>
									<li>
										Berusaha untuk mempererat mitra hubungan kerjasama dengan
										sekolah lain dan instansi diberbagai bidang yang bersifat
										positif.
									</li>
									<li>
										{" "}
										Membantu BK (Bimbingan Konseling) dalam mengatur Duquba.
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
