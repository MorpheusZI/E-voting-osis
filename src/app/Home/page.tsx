"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

interface User {
	nama: string;
}
export default function Hom() {
	const displayOSref = useRef<HTMLDivElement>(null);
	const displayMPKref = useRef<HTMLDivElement>(null);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [1000]);
	const handledisplayOSIS = () => {
		displayOSref.current?.classList.remove("hidden");
		displayOSref.current?.classList.toggle("flex");
		displayMPKref.current?.classList.toggle("hidden");
		displayMPKref.current?.classList.remove("flex");
	};
	const handledisplayMPK = () => {
		displayOSref.current?.classList.toggle("hidden");
		displayOSref.current?.classList.remove("flex");
		displayMPKref.current?.classList.remove("hidden");
		displayMPKref.current?.classList.toggle("flex");
	};
	return (
		<body className="bg-[#fff] text-black font-montserrat max-w-md container mx-auto">
			<header className="container h-80 flex flex-col mb-10 bg-cover bg-no-repeat bg-center">
				<nav className="flex text-white items-center justify-between bg-blue-500 p-4">
					<div className="flex items-center">
						<Image
							src={"/penusimg.png"}
							alt="SMK Plus Pelita Nusantara"
							width={50}
							height={50}
						/>
						<p className="ml-1">SMK PNB</p>
					</div>
					<h1>{user?.nama}</h1>
				</nav>
				<div className="bg-cover py-20 h-full bg-gedung-penus bg-opacity-20 bg-center bg-white">
					<h1 className="text-5xl font-bold text-center text-blue-700 leading-[4rem]">
						E-Voting <br />
						OSIS & MPK
					</h1>
				</div>
			</header>

			<main className="container min-h-fit pt-2 my-[150px] px-7 flex flex-col text-white">
				<div className="flex justify-center">
					<button
						className="bg-cyan-400 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayOSIS}>
						OSIS
					</button>
					<button
						className="bg-yellow-400 py-2 px-5 rounded-t-lg text-4xl font-semibold"
						onClick={handledisplayMPK}>
						MPK
					</button>
				</div>
				<div
					className="flex flex-col bg-gradient-to-b pt-10 from-cyan-400 to-blue-500 shadow-xl shadow-blue-300 rounded-xl items-center"
					id="osis"
					ref={displayOSref}>
					<div className="text-center">
						<Link href={"/Home/Osis/Calon1"} className="">
							<span className="text-sm text-gray-700 text-opacity-50">
								*klik gambar!
							</span>
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b shadow-blue-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8 text-center">
								Reno & Oner
							</h2>
						</Link>
					</div>
					<div className="text-center ">
						<Link
							href={"Home/Osis/Calon2"}
							className=" rounded-full font-semibold text-xl py-3 px-6">
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b shadow-blue-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8">
								Reno & Oner
							</h2>
						</Link>
					</div>
					<div className="text-center ">
						<Link
							href={"Home/Osis/Calon3"}
							className=" rounded-full font-semibold text-xl py-3 px-6">
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b shadow-blue-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8">
								Reno & Oner
							</h2>
						</Link>
					</div>
				</div>
				<div
					className="hidden flex-col bg-yellow-400 rounded-xl items-center"
					id="mpk"
					ref={displayMPKref}>
					<div className="text-center">
						<Link href={"/Home/Osis/Calon1"} className="">
							<span className="text-sm text-gray-700 text-opacity-50">
								*klik gambar!
							</span>
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b shadow-blue-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8 text-center">
								Reno & Oner
							</h2>
						</Link>
					</div>
					<div className="text-center ">
						<Link
							href={"Home/Osis/Calon2"}
							className=" rounded-full font-semibold text-xl py-3 px-6">
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b shadow-blue-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8">
								Reno & Oner
							</h2>
						</Link>
					</div>
					<div className="text-center ">
						<Link
							href={"Home/Osis/Calon3"}
							className=" rounded-full font-semibold text-xl py-3 px-6">
							<Image
								src={"/OsisImage.png"}
								alt=""
								height={400}
								width={300}
								className="rounded-xl shadow-lg bg-gradient-to-b from-amber-300 to-yellow-500 shadow-yellow-600"
							/>
							<h2 className="font-bold text-3xl text-white my-5 mb-8">
								Reno & Oner
							</h2>
						</Link>
					</div>

				</div>
			</main>
		</body>
	);
}
