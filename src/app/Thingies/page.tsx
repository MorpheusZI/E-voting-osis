// src/app/VotesDashboard/page.tsx

import { redirect } from "next/navigation";
import {
	O1votes,
	O2votes,
	O3votes,
	M1votes,
	M2votes,
	M3votes,
	Voted,
} from "../server/FetchUserdata";

export default async function Voices() {
	const Evotes = await Voted();
	const osis1votes = await O1votes();
	const osis2votes = await O2votes();
	const osis3votes = await O3votes();
	const MPK1votes = await M1votes();
	const MPK2votes = await M2votes();
	const MPK3votes = await M3votes();

	return (
		<div className="flex flex-col gap-[3rem]">
			<h1 className="text-4xl font-bold">Total Yang sudah memilih: {Evotes}</h1>
			<ul className="list-inside gap-[2rem] px-5 flex flex-col-">
				<li>
					<ol className="list-inside list-disc">
						<span className="text-xl">Pilihan Osis:</span>
						<li>Kandidat 1 : {osis1votes}</li>
						<li>Kandidat 2 : {osis2votes}</li>
						<li>Kandidat 3 : {osis3votes}</li>
					</ol>
				</li>
				<li>
					<ol className="list-inside list-disc">
						<span className="text-xl">Pilihan MPK:</span>
						<li>Kandidat 1 : {MPK1votes}</li>
						<li>Kandidat 2 : {MPK2votes}</li>
						<li>Kandidat 3 : {MPK3votes}</li>
					</ol>
				</li>
			</ul>
		</div>
	);
}
