"use client"
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
const prisma = new PrismaClient()

export default function Home() {
  return <div className="flex flex-col">
    <h1>hai</h1>
    <Link href={ "/Login" } className="text-xl font-bold hover:underline">Login dulu bos</Link>
  </div>
}

