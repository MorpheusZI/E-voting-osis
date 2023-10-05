"use client";
import { updateMPK } from "@/app/server/UpdateMPK";
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
  const MPKID: number = 1;
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
      updateMPK(user.id, user.NISN, MPKID);
      console.log(user);
    }
    setTimeout(() => {
      router.push("/Home");
    }, 400);
  };
  return (
    <div className='hai'>
      <div className='text-start py-4 px-6 pb-'>
        <Link href={"/Home"} className='text-md font-bold'>
          Home
        </Link>
      </div>
      <div className='px-8 py-2 sm:p-7 h-96'>
        <div className='flex flex-col sm:flex-row gap-4 justify-between'>
          <div className='flex flex-col w-full h-90'>
            <div className='h-90 sm:w-full rounded-3xl px-5 text-white py-5 bg-black'>
              hai
            </div>
            <h1 className='text-gray-300 font-bold text-3xl text-center'>
              Hai & Bai
            </h1>
          </div>
          <div className='flex flex-col gap-10 sm:gap-4 py-6 px-3'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-bold'>Visi</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                magnam, labore ratione molestias reiciendis quod, earum quis,
                placeat praesentium sint maiores laudantium. Quam delectus vero
                nesciunt? Ratione praesentium, incidunt minus quis fuga vero
                provident corrupti ipsam nobis facere veniam repellendus rem
                iusto asperiores pariatur, modi tempore. Sed corporis
                repudiandae laborum.
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-bold'>Misi</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus neque quis iste molestiae, nulla adipisci, laboriosam
                voluptatem perferendis minima eaque quaerat recusandae excepturi
                iusto non in nemo eos autem praesentium!
              </p>
            </div>
            <button
              onClick={handleUpdate}
              className='bg-black rounded-xl text-xl text-white px-10 py-3'>
              {" "}
              Pilih saya!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 