export default function loading() {
	return (
		<div className="flex flex-col gap-[3rem]">
			<h1 className=" flex text-4xl font-bold">
				Total Yang sudah memilih:{" "}
				<div className="w-[80px] h-[25px] mt-2 ms-3 bg-gray-600 animate-pulse"></div>
			</h1>
			<ul className="list-inside gap-[2rem] px-5 flex flex-col-">
				<li>
					<ol className="list-inside list-disc">
						<span className="text-xl">Pilihan Osis:</span>
						<li>
							Kandidat 1 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
						<li>
							Kandidat 2 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
						<li>
							Kandidat 3 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
					</ol>
				</li>
				<li>
					<ol className="list-inside list-disc">
						<span className="text-xl">Pilihan MPK:</span>
						<li>
							Kandidat 1 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
						<li>
							Kandidat 2 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
						<li>
							Kandidat 3 :{" "}
							<span className="animate-pulse text-gray-600">Loading...</span>{" "}
						</li>
					</ol>
				</li>
			</ul>
		</div>
	);
}
