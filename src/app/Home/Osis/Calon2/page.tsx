
 "use client";
import { updateOsis } from "@/app/server/UpdateOsis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface user {
  id: number;
  nama: string;
  isVoted: boolean;
  NISN: number;
}

export default function Osis1() {
  const [user, setUser] = useState<user | null>(null);
  const router = useRouter();
  const OsisID: number = 3;
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage]);
  console.log(user);
  const handleUpdate = () => {
    if (user) {
      updateOsis(user.id, user.NISN, OsisID);
      console.log(user);
    }
    setTimeout(() => {
      router.push("/Home");
    }, 400);
  };
  return (
    <div className="h-full sm:h-[80vh] gap-3 sm:flex-row flex-col p-7 sm:p-5 max-w-[100vw]  flex">
      <Link href={"/Home"} className="align-start py-5 text-md font-bold"> Kembali</Link>
        <div className="flex flex-col w-full items-center sm:w-[80vw] sm:h-full">
          <div className="h-[80vw] w-[50vh] sm:h-17vh rounded-xl bg-black">hai</div>
          <h1 className="text-2xl text-gray-400 font-bold my-4">Dillon & Murphy</h1>
        </div>
        <div className="flex sm:p-7 flex-col gap-[10vh] items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Visi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi vero impedit nesciunt rem quisquam, eaque sit. Officiis porro eos corporis sequi nobis commodi voluptate in numquam. Quae fuga minima quaerat doloremque? Ducimus, maxime ratione? Aliquid placeat quaerat dolor mollitia!</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Misi</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem consequatur recusandae voluptatibus minus aliquid molestias architecto alias, vitae omnis saepe repellendus neque beatae deleniti quos aliquam nam. Nam commodi aliquid dolor aperiam!</p>
          </div>
          <button onClick={handleUpdate} className='bg-black rounded-xl text-xl text-white px-10 py-3'>Pilih saya!</button>
        </div>
      </div>
  );
}
 