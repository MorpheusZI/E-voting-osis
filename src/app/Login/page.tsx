"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { handlelog } from "../server/LogCheck";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    password: "",
  });
  const [user, setUser] = useState();
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
      router.push("/Home");
    } else {
      setError("username atau password yang dimasukan salah");
    }
  };

  return (
    <div className='w-full grid place-items-center mt-11 '>
      <form
        onSubmit={handleSubmit}
        className='shadow-lg max-w-xs px-6 py-12  shadow-blue-200 flex flex-col gap-5 border rounded-lg items-center justify-around'>
        <h1 className='text-2xl font-bold mb-3'>E-Voting Login</h1>
        <div className='mb-3 flex flex-col'>
          <label
            htmlFor='nama'
            className='text-gray-600 text-md font-bold mb-2'>
            Nama
          </label>
          <input
            type='text'
            name='nama'
            id='nama'
            value={formData.nama}
            onChange={handleChange}
            className='px-3 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:shadow-xl focus:shadow-green-200 focus:ring-blue-200 shadow-lg shadow-black-200'
          />
        </div>
        <div className='mb-3 flex flex-col'>
          <label
            htmlFor='password'
            className='text-gray-600 text-md font-bold mb-2'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            className='px-3 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-200 focus:shadow-green-200 focus:shadow-xl shadow-lg shadow-black-800'
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='text-white text-xl py-2 px-6 bg-black border rounded-xl'
        />
        {error && <p className='text-red-600'>{error}</p>}
      </form>
    </div>
  );
}


