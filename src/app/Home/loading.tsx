export default function Loading() {
	return (
		<main className="bg-white text-black max-w-phone container mx-auto items-center">
			<header className="container h-80 flex flex-col mb-10 bg-cover bg-no-repeat bg-center">
				<nav className="flex text-white items-center justify-between bg-blue-500 px-2 py-4 pe-[20px]">
					<div className="flex items-center">
						<div className="bg-gray-700 animate-pulse w-[40px] h-[40px]"></div>
						<p className="">SMK PNB</p>
					</div>
					<h1>Loading ...</h1>
				</nav>
				<div className="bg-cover py-20 h-full bg-gedung-penus bg-opacity-20 bg-center bg-white">
					<h1 className="text-5xl font-bold text-center text-blues-100 leading-[4rem]">
						E-Voting <br />
						OSIS & MPK
					</h1>
				</div>
				<p className="mt-[5rem] text-center text-5xl font-bold text-gray-700">
					Loading...
				</p>
			</header>
		</main>
	);
}
