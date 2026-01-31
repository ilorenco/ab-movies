import type { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="bg-purple-base hover:bg-purple-light flex w-full items-center justify-center gap-2 rounded-md px-5 py-3.5 font-bold text-white hover:cursor-pointer"
            {...props}
        >
            {children}
        </button>
    )
}
