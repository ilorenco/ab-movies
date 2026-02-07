"use client"

import { SignOutIcon } from "@phosphor-icons/react"

export function IconButton() {
    return (
        <button className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-300 p-1.5">
            <SignOutIcon
                width={20}
                height={20}
                color="currentColor"
                className="group-hover:text-purple-light text-gray-500"
            />
        </button>
    )
}
