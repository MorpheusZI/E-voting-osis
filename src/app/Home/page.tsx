"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import fullFil from "../server/Updatefull";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface User {
	id: number;
	nama: string;
	pilihan_osis: number;
	pilihan_mpk: number;
	isvoted: boolean;
}
export default function Hom() {
	//react hooks
	const router = useRouter();
	const displaySubo = useRef<HTMLDivElement & HTMLButtonElement>(null);
	const displaySub = useRef<HTMLDivElement & HTMLButtonElement>(null);
	const displayOSref = useRef<HTMLDivElement>(null);
	const displayMPKref = useRef<HTMLDivElement>(null);
	const [user, setUser] = useState<User>();
	const [osisPick, setosisPick] = useState<number>();
	const [MPKPick, setMPKPick] = useState<number>();

	useEffect(() => {
		let userOSISpick1 = false;
		let userOSISpick3 = false;
		let userMPKpick1 = false;
		let userMPKpick2 = false;
		let userMPKpick3 = false;
		let userOSISpick2 = false;
		if (user?.pilihan_osis == 2) {
			setosisPick(2);
		}
		if (user?.pilihan_mpk == 2) {
			setMPKPick(2);
		}
		if (user?.pilihan_mpk == 3) {
			setMPKPick(3);
		}
		if (user?.pilihan_mpk == 1) {
			setMPKPick(1);
		}
		if (user?.pilihan_osis == 1) {
			setosisPick(1);
		}
		if (user?.pilihan_osis == 3) {
			setosisPick(3);
		}
	}, [user]);
	//other vars
	let userFname;
	user ? (userFname = user?.nama.split(" ")) : (userFname = "guest");

	//getting the userdata
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	//JS window functions
	const handledisplayOSIS = () => {
		setTimeout(() => {
			displayMPKref.current?.classList.toggle("hidden");
		}, 300);
		displayOSref.current?.classList.remove("hidden");
		displayOSref.current?.classList.toggle("flex");
		displayMPKref.current?.classList.toggle("animate-fade-left");
		setTimeout(() => {
			displayOSref.current?.classList.remove("animate-fade-right");
		}, 500);
		displayMPKref.current?.classList.remove("flex");
	};
	const handledisplayMPK = () => {
		displayOSref.current?.classList.remove("flex");
		displayOSref.current?.classList.toggle("animate-fade-right");
		setTimeout(() => {
			displayMPKref.current?.classList.remove("animate-fade-left");
		}, 500);
		displayMPKref.current?.classList.remove("hidden");
		displayMPKref.current?.classList.toggle("flex");
		displayOSref.current?.classList.toggle("hidden");
	};
	const handleSubdisplay = () => {
		displaySub.current?.classList.remove("block");
		displaySubo.current?.classList.remove("hidden");
		displaySubo.current?.classList.toggle("flex");
		displaySub.current?.classList.toggle("hidden");
	};
	const handlefullfil = () => {
		if (user) {
			fullFil(user?.id, user?.nama);
			setTimeout(() => {
				router.push("/Home/Thanks");
			}, 400);
		}
	};
	return (
		<main className="bg-white text-black w-full flex flex-col items-center">
			<header className="w-full h-80 flex flex-col mb-10 bg-cover bg-no-repeat bg-center">
				<nav className="flex text-white items-center justify-between bg-blue-500 px-8 py-4 pe-[10vw]">
					<div className="flex items-center">
						<Image
							src={"/penusimg.png"}
							alt="SMK Plus Pelita Nusantara"
							width={50}
							height={50}
						/>
						<p className="">SMK PNB</p>
					</div>
					<h1>{userFname[0]}</h1>
				</nav>
				<div className="bg-cover py-20 h-full bg-gedung-penus bg-opacity-20 bg-center bg-white">
					<h1 className="text-5xl font-bold text-center text-blues-100 leading-[4rem]">
						E-Voting <br />
						OSIS & MPK
					</h1>
				</div>
			</header>
			<main className="w-full pt-2 mb-[150px] sphone:mt-[1rem] mt-[5rem] px-1 sm:px-6 flex flex-col items-center text-white">
				<div className="flex justify-center">
					<button
						className="bg-blues-100 sphone:bg-blue-500 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayOSIS}>
						OSIS
					</button>
					<button
						className="bg-red-700 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayMPK}>
						MPK
					</button>
				</div>
				<h1 className="text-xs mb-[-1rem] self-start justify-self-start text-white">
					Klik salah satu kandidat untuk memilih !
				</h1>
				<div
					className=" flex flex-col sphone:flex-row sphone:items-center sphone:justify-between gap-[60px]  sphone:px-10 px-2 pb-7 py-6 bg-gradient-to-t from-cyan-400 to-blue-500 shadow-xl shadow-blue-300 rounded-xl items-center w-[100%] sm:w-[100%]"
					id="osis"
					ref={displayOSref}>
					<section
						className={
							osisPick == 1
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 1
							</h1>
							<Link href="/Home/Osis/Calon1" className="cursor-pointer">
								<div className="bg-transparent overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-1-2.jpg"
										alt=""
										height={50}
										width={50}
										layout="responsive"
										className=""
									/>
								</div>
								<h2 className="sphone:text-sm text-3xl text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[10vw]">
									Dionisius Kraeng
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							osisPick == 2
								? "bg-gradient-to-b from-lime-400 px-4 to-green-400 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 2
							</h1>
							<Link href="/Home/Osis/Calon2" className="cursor-pointer">
								<div className="bg-transparent h-[70%] w-full overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-2-2.jpg"
										alt=""
										height={200}
										width={200}
										layout="responsive"
									/>
								</div>
								<h2 className="sphone:text-sm text-3xl text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[10vw]">
									Anita Widayanti
								</h2>
							</Link>
						</div>
					</section>{" "}
					<section
						className={
							osisPick == 3
								? "bg-gradient-to-b from-lime-400 px-4 to-green-400 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] sphone:hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 3
							</h1>
							<Link href="/Home/Osis/Calon3" className="cursor-pointer">
								<div className="bg-transparent overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-3-2.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="sphone:text-sm text-3xl text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[10vw]">
									Farel Permana
								</h2>
							</Link>
						</div>
					</section>
				</div>
				<div
					className="hidden flex-col sphone:flex-row sphone:items-center sphone:justify-between gap-[60px]  sphone:px-10 px-2 pb-7 py-6 bg-gradient-to-t from-red-400 to-red-700 shadow-xl shadow-blue-300 rounded-xl items-center w-[100%] sm:w-[100%]"
					id="mpk"
					ref={displayMPKref}>
					<section
						className={
							MPKPick == 1
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 1
							</h1>
							<Link href="/Home/MPK/Calon1" className="cursor-pointer">
								<div className="bg-transparent overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-1-1.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
										className=""
									/>
								</div>
								<h2 className="text-3xl sphone:text-sm text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[5rem]">
									Che Lattoe Castro P.
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							MPKPick == 2
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 2
							</h1>
							<Link href="/Home/MPK/Calon2" className="cursor-pointer">
								<div className="bg-transparent overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-2-2.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl sphone:text-sm text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[5rem]">
									Naila Amaliyah
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							MPKPick == 3
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-0 w-[90%] phone:w-[25%] hover:animate-wiggle "
						}>
						<div className="text-center">
							<h1 className="text-3xl sphone:text-xl sphone:py-[2rem] py-5 text-white font-bold">
								Kandidat 3
							</h1>
							<Link href="/Home/MPK/Calon3" className="cursor-pointer">
								<div className="bg-transparent overflow-hidden sphone:px-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-3-1.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl sphone:text-sm text-white font-bold mt-[20px] sphone:mb-[1rem] mb-[5rem]">
									Zusril Indra Bramanta
								</h2>
							</Link>
						</div>
					</section>
				</div>
				<div className="flex flex-col sphone:mt-7 mt-[2rem] w-[70%] sphone:w-full sphone:gap-[1rem] gap-[12px] items-center">
					<h1 className="text-xs text-center text-black">
						Pilihan anda akan berwarna hijau
					</h1>
					<h1 className="text-xs text-center text-black">
						Klik salah salah satu gambar kandidat jika ingin mengganti pilihan
					</h1>
				</div>
				<div
					ref={displaySubo}
					className="hidden flex-col gap-3 justify-center items-center w-[92%] shadow-lg shadow-red-600 px-4 sphone:w-[60%] h-full py-5 mt-10 border-red-500 border-2 rounded-3xl">
					<h1 className="text-red-600 animate-bounce text-3xl font-bold">
						Perhatian !!
					</h1>
					<h3 className="text-lg text-center mt-9 font-semibold text-red-500">
						Anda telah memilih kandidat berikut:{" "}
					</h3>
					<div className="flex flex-col items-center gap-5">
						<h1 className="text-2xl font-bold text-green-500">
							Kandidat Osis No {user?.pilihan_osis}
						</h1>{" "}
						<h1 className="text-sm text-black">dan</h1>
						<h1 className="text-2xl  font-bold text-green-500">
							Kandidat MPK No {user?.pilihan_mpk}
						</h1>
					</div>
					<h3 className="text-xl text-center mt-5 text-red-500">
						Pastikan anda sudah memilih MPK juga, scroll ke bagian atas, klik
						pada tab `&quot;`MPK`&quot;` dan ganti pilihan anda
					</h3>
					<button
						onClick={handlefullfil}
						className="block w-full mt-[3rem] px-6 py-3 bg-gradient-to-l from-cyan-400 to-blue-500 rounded-2xl shadow-xl shadow-gray-500 sphone:text-3xl text-2xl font-bold">
						Submit Pilihan Saya!
					</button>
				</div>
				<button
					ref={displaySub}
					onClick={handleSubdisplay}
					className="block w-[80%] mt-[3rem] px-6 py-3 bg-gradient-to-l from-cyan-400 to-blue-500 rounded-2xl shadow-xl shadow-gray-500 sphone:text-3xl font-bold">
					Submit Pilihan Saya!
				</button>
			</main>
			<footer className="bg-blues-100 shadow-lg h-[9rem] flex flex-col gap-2 justify-center items-center w-full">
				<p className="text-sm text-gray-200">© SMK Plus Pelita Nusantara </p>
				<p className="text-sm text-gray-200">Developed by: Devaccto RPL</p>
			</footer>
		</main>
	);
}
