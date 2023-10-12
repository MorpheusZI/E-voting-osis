import React from "react";

export default function Thanks() {
	return (
		<div className="flex h-screen justify-center flex-col items-center px-3 bg-gradient-to-b from-blue-400 to-cyan-600">
			<h1 className="sphone:text-3xl text-2xl text-center font-bold text-white">
				Terimakasih telah voting. 😁
			</h1>
			<h3 className="sphone:text-sm text-sm mt-5 text-center font-semibold text-gray-300">
				Jika anda melihat web page ini, berarti anda telah melakukan/submit
				pilihan e-voting
			</h3>
			<h1 className="text-sm mt-10 text-white">Made by Devaccto RPL</h1>
		</div>
	);
}
