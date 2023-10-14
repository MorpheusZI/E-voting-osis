"use client";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Thanks() {
	const [Waktu, setWaktu] = useState<number>();
	const [count, setCount] = useState(5);
	const router = useRouter();

	useEffect(() => {
		let intervalId: any;

		if (count > 0) {
			intervalId = setInterval(() => {
				setCount((prevCount) => prevCount - 1);
			}, 1000);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [count]);
	useEffect(() => {
		if (count == 0) {
			sessionStorage.removeItem("user");
			router.push("/Login");
		}
	}, [count, router]);
	return (
		<div className="flex h-screen justify-center flex-col items-center px-3 bg-gradient-to-b from-blue-400 to-cyan-600">
			<h1 className="sphone:text-3xl text-2xl text-center font-bold text-white">
				Terimakasih telah voting. 😁
			</h1>
			<h3 className="sphone:text-sm text-sm mt-5 text-center font-semibold text-gray-300">
				Jika anda melihat Halaman, berarti anda telah melakukan/submit pilihan
				e-voting
			</h3>
			<h3 className="sphone:text-sm text-sm mt-5 text-center font-semibold text-red-600">
				anda akan Logout dalam : {count}
			</h3>
			<h1 className="text-sm mt-10 text-white">Made by Devaccto RPL</h1>
		</div>
	);
}
