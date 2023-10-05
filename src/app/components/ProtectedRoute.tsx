"use client"

import { ReactNode, useEffect } from "react";
import { getRouter } from "../utils/router";
import { getUserData } from "../utils/auth";

const AuthWrapper = ({ children } : {children :ReactNode}) => {
    const router = getRouter()
    const userdata = getUserData()

    useEffect(() => {
        if (!userdata) {
            router.replace("/Login")
        }
    }, [router, userdata])
    return <>{ children }</>
}

export default AuthWrapper