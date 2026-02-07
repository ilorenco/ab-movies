import type { ComponentProps, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "flex w-full items-center justify-center gap-2 rounded-md px-5 py-3.5 font-bold transition-colors hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "bg-purple-base text-white hover:bg-purple-light",
                ghost: "bg-transparent text-gray-500 font-normal hover:bg-gray-200"
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({ children, variant, className, ...props }: ButtonProps) {
    return (
        <button className={cn(buttonVariants({ variant }), className)} {...props}>
            {children}
        </button>
    )
}
