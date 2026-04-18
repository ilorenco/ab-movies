"use client"

import type { ReactNode } from "react"

interface EmptyStateProps {
    icon: ReactNode
    message: ReactNode
    action?: ReactNode
}

export function EmptyState({ icon, message, action }: EmptyStateProps) {
    return (
        <section
            className="flex flex-col items-center justify-center gap-5 py-20"
            role="status"
            aria-live="polite"
        >
            {icon}

            <p className="font-nunito-sans text-center text-base text-gray-600">{message}</p>

            {action}
        </section>
    )
}
