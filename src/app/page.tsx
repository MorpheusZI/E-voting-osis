"use client"
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
const prisma = new PrismaClient()

export default function Home() {
  return redirect("/Login")
}

