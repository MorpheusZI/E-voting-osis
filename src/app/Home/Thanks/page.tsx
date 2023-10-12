import React from "react";

export default function Thanks() {
	return (
		<div className="flex h-screen justify-center flex-col items-center bg-gradient-to-b from-blue-400 to-cyan-600">
			<h1 className="text-3xl font-bold text-white">
				Terimakasih telah voting, 😁
			</h1>
			<h3 className="text-sm mt-5 font-semibold text-gray-500">
				Jika anda melihat web page ini anda telah melakukan voting
			</h3>
		</div>
	);
}
