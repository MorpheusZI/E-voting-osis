"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

interface User {
	nama: string;
	pilihan_osis: number;
	pilihan_mpk: number;
}
export default function Hom() {
	//react hooks
	const displayOSref = useRef<HTMLDivElement>(null);
	const displayMPKref = useRef<HTMLDivElement>(null);
	const [user, setUser] = useState<User | null>(null);
	let userOSISpick1 = false;
	let userOSISpick2 = false;
	let userOSISpick3 = false;
	let userMPKpick1 = false;
	let userMPKpick2 = false;
	let userMPKpick3 = false;

	console.log(user?.pilihan_osis);
	console.log(user?.pilihan_osis);
	if (user?.pilihan_osis == 2) {
		userOSISpick2 = true;
		console.log("yas");
	}
	if (user?.pilihan_mpk == 2) {
		userMPKpick2 = true;
	}
	if (user?.pilihan_mpk == 3) {
		userMPKpick3 = true;
	}
	if (user?.pilihan_mpk == 1) {
		userMPKpick1 = true;
	}
	if (user?.pilihan_osis == 1) {
		userOSISpick1 = true;
		console.log("yas2");
	}
	if (user?.pilihan_osis == 3) {
		userOSISpick3 = true;
		console.log("yas");
	}
	//other vars
	const userFname = user?.nama.split(" ");
	const Firstname = userFname ? userFname[0] : "Guest";

	//getting the userdata
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [2000]);

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
	return (
		<main className="bg-white text-black max-w-sphone container mx-auto">
			<header className="container h-80 flex flex-col mb-10 bg-cover bg-no-repeat bg-center">
				<nav className="flex text-white items-center justify-between bg-blue-500 px-2 py-4 pe-[20px]">
					<div className="flex items-center">
						<Image
							src={"/penusimg.png"}
							alt="SMK Plus Pelita Nusantara"
							width={50}
							height={50}
						/>
						<p className="">SMK PNB</p>
					</div>
					<h1>{Firstname}</h1>
				</nav>
				<div className="bg-cover py-20 h-full bg-gedung-penus bg-opacity-20 bg-center bg-white">
					<h1 className="text-5xl font-bold text-center text-blues-100 leading-[4rem]">
						E-Voting <br />
						OSIS & MPK
					</h1>
				</div>
			</header>
			<main className="container min-h-fit pt-2 mb-[150px] mt-[5rem] px-1 sm:px-6 flex flex-col text-white">
				<div className="flex justify-center">
					<button
						className="bg-blues-100 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayOSIS}>
						OSIS
					</button>
					<button
						className="bg-red-700 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayMPK}>
						MPK
					</button>
				</div>
				<div
					className="flex flex-col gap-[60px] px-1 pb-7 py-6 bg-blues-100 sphone:bg-gradient-to-t from-cyan-400 to-blue-500 shadow-xl shadow-blue-300 rounded-xl items-center w-[100%] sm:w-[70%]"
					id="osis"
					ref={displayOSref}>
					<h1 className="text-xs mb-[-2rem] text-white">
						Klik salah satu kandidat untuk memilih !
					</h1>
					<section
						className={
							userOSISpick1
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 1</h1>
							<Link href="/Home/Osis/Calon1" className="cursor-pointer">
								<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-1-2.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
										className=""
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Dionisius Kraeng
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							userOSISpick2
								? "bg-gradient-to-b from-lime-400 px-4 to-green-400 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 2</h1>
							<Link href="/Home/Osis/Calon2" className="cursor-pointer">
								<div className="bg-white rounded-xl h-[70%] w-full sm:h-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-2-2.jpg"
										alt=""
										height={200}
										width={200}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Anita Widayanti
								</h2>
							</Link>
						</div>
					</section>{" "}
					<section
						className={
							userOSISpick3
								? "bg-gradient-to-b from-lime-400 px-4 to-green-400 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-cyan-400 px-4 to-blue-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 3</h1>
							<Link href="/Home/Osis/Calon3" className="cursor-pointer">
								<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/OSISimg/OSIS-3-2.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Farel Permana
								</h2>
							</Link>
						</div>
					</section>
				</div>
				<div
					className="hidden flex-col gap-[60px] px-1 pb-7 py-6 bg-red-700 shadow-xl shadow-yellow-300 rounded-xl items-center w-[100%] sm:w-[70%]"
					id="mpk"
					ref={displayMPKref}>
					<h1 className="text-md mb-[-2rem] text-white">
						Klik salah satu kandidat untuk memilih !
					</h1>
					<section
						className={
							userMPKpick1
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 1</h1>
							<Link href="/Home/MPK/Calon1" className="cursor-pointer">
								<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-1-1.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
										className=""
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Che Lattoe Castro P.
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							userMPKpick2
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 2</h1>
							<Link href="/Home/MPK/Calon2" className="cursor-pointer">
								<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-2-2.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Naila Amaliyah
								</h2>
							</Link>
						</div>
					</section>
					<section
						className={
							userMPKpick3
								? "bg-gradient-to-b from-lime-400 px-4 to-green-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80]"
								: "bg-gradient-to-b from-red-400 px-4 to-red-700 shadow-xl rounded-xl phone:p-8 w-[90%] phone:w-[80] "
						}>
						<div className="text-center">
							<h1 className="text-3xl my-6 text-white font-bold">Kandidat 3</h1>
							<Link href="/Home/MPK/Calon3" className="cursor-pointer">
								<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
									<Image
										src="/MPKimg/MPK-3-1.jpg"
										alt=""
										height={100}
										width={100}
										layout="responsive"
									/>
								</div>
								<h2 className="text-3xl text-white font-bold mt-[20px] mb-[10vw]">
									Zusril Indra Bramanta
								</h2>
							</Link>
						</div>
					</section>
				</div>
			</main>
			<footer className="bg-blues-100 shadow-lg h-[9rem] flex flex-col gap-2 justify-center items-center dark:bg-gray-800">
				<p className="text-sm text-gray-200">© SMK Plus Pelita Nusantara </p>
				<p className="text-sm text-gray-200">Developed by: Devaccto RPL</p>
			</footer>
		</main>
	);
}
