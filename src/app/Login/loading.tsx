export default function Loading() {
	<div className="w-full flex flex-col items-center justify-center h-[60vh] mt-[11vh] ">
		<form className="shadow-lg w-[80%] mt-[-1px] gap-6 border-none h-[150%] bg-gradient-to-r from-cyan-400 to-blue-600 sm:max-w-xs sm:px-6 sm:py-12 py-2 mx-4 pb-4 shadow-blue-400 flex flex-col border rounded-3xl items-center justify-around">
			<div className="flex flex-wrap flex-row py-2 ps-2 shadow-blue-300 h-[17%] w-full ">
				<div className="relative h-[50] w-[50px]"></div>
				<div className=" text-center self-center ms-2 phone:flex-auto sphone:ms-3 mb-1 text-white">
					<h1 className="sphone:text-3xl text-xl font-bold">E-Voting Login</h1>
				</div>
			</div>
			<div className="mb-3 w-[83%] flex flex-col">
				<label htmlFor="nama" className="text-white text-2xl font-bold mb-2">
					Nama
				</label>
				<div className="h-[30%] w-full bg-gray-500 animate-pulse" />
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
					className="focus:ring-blue-200 focus:shadow-green-200 focus:shadow-xl shadow-lg shadow-black-800"
				/>
			</div>
			<input
				type="submit"
				value="Login"
				className="text-white mb-5 text-xl py-2 px-6 bg-transparent border rounded-xl"
			/>
		</form>
		<p className="text-sm text-gray-500 my-5">By Devaccto RPL Group</p>
	</div>;
}
