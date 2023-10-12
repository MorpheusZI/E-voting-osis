"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { handlelog } from "../server/LogCheck";
import Image from "next/image";

interface User {
	id: number;
	nama: string;
	NISN: number;
	pilihan_osis: number;
	pilihan_mpk: number;
	isvoted: boolean;
}

export default function Login() {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();
	const [formData, setFormData] = useState({
		nama: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formDataObject = new FormData();
		formDataObject.append("nama", formData.nama);
		formDataObject.append("password", formData.password);
		const loggedIn = await handlelog(formDataObject);
		const usr = formDataObject;

		if (loggedIn) {
			sessionStorage.setItem("user", JSON.stringify(loggedIn));
			setUser(loggedIn);
			router.push("/Home");
		} else {
			setError("username atau password yang dimasukan salah");
		}
	};

	return (
		<div className="w-full flex flex-col items-center justify-center h-[60vh] mt-[130px] ">
			<form
				onSubmit={handleSubmit}
				className="shadow-lg w-[80%] mt-[-1px] gap-6 border-none h-[150%] bg-gradient-to-r from-cyan-400 to-blue-600 sm:max-w-xs sm:px-6 sm:py-12 py-2 mx-4 pb-4 shadow-blue-400 flex flex-col border rounded-3xl items-center justify-around">
				<div className="flex flex-wrap flex-row py-2 ps-2 shadow-blue-300 h-[17%] w-full ">
					<Image
						alt="SMK plus Pelita Nusantara"
						src={"/penusimg.png"}
						width={50}
						height={50}
						className="relative"></Image>
					<div className=" text-center self-center ms-2 phone:flex-auto sphone:ms-3 mb-1 text-white">
						<h1 className="sphone:text-3xl text-xl font-bold">
							E-Voting Login
						</h1>
					</div>
				</div>
				<div className="mb-3 w-[83%] flex flex-col">
					<label htmlFor="nama" className="text-white text-2xl font-bold mb-2">
						Nama
					</label>
					<input
						type="text"
						name="nama"
						id="nama"
						value={formData.nama}
						onChange={handleChange}
						placeholder="Nama Lengkap"
						className="px-3 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:shadow-xl focus:shadow-green-200 focus:ring-blue-200 shadow-lg shadow-black-200 max-w-[25rem]"
					/>
				</div>
				<div className="mb-3 w-[83%] flex flex-col">
					<label
						htmlFor="password"
						className="text-white text-2xl font-bold mb-2">
						Password
					</label>
					<input
						type="text"
						name="password"
						id="password"
						placeholder="NIS/NIG/Password"
						value={formData.password}
						onChange={handleChange}
						className="px-3 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-200 focus:shadow-green-200 focus:shadow-xl shadow-lg shadow-black-800"
					/>
				</div>
				<input
					type="submit"
					value="Login"
					className="text-white mb-5 text-xl py-2 px-6 bg-transparent border rounded-xl"
				/>
				{user && (
					<p className="text-md text-white">
						{" "}
						Login Berhasil <br /> menuju ke halaman utama ...
					</p>
				)}
				{error && (
					<p className="text-red-600 text-[10px] px-3 py-1 w-[80%] text-center m-3 border-2 border-red-500 bg-white font-bold rounded-xl">
						{error}
					</p>
				)}
			</form>
			<p className="text-sm text-gray-500 my-5">By Devaccto RPL Group</p>
		</div>
	);
}
