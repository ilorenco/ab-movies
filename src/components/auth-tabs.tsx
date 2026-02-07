"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function AuthTabs() {
    const pathname = usePathname()

    return (
        <div className="flex w-full justify-center gap-1 rounded-[10px] bg-gray-200 p-1">
            <Link
                href="/login"
                aria-current={pathname === "/login" ? "page" : undefined}
                className="aria-[current=page]:text-purple-light flex-1 rounded-md py-2 text-center text-gray-500 aria-[current=page]:bg-gray-300"
                aria-label="Login"
            >
                Login
            </Link>
            <Link
                href="/register"
                aria-current={pathname === "/register" ? "page" : undefined}
                className="aria-[current=page]:text-purple-light flex-1 rounded-md py-2 text-center text-gray-500 aria-[current=page]:bg-gray-300"
                aria-label="Register"
            >
                Cadastro
            </Link>
        </div>
    )
}
