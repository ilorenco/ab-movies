import Image from "next/image"
import HeroPanel from "@/assets/images/hero-panel.svg"
import { AuthTabs } from "@/components/auth-tabs"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex min-h-screen">
            <aside
                className="flex w-1/2 flex-col items-center justify-center"
                aria-label="Hero panel"
            >
                <Image src={HeroPanel} alt="Hero Panel" className="h-auto max-w-full" />
            </aside>
            <section className="flex w-1/2 flex-col items-center justify-center">
                <div className="flex w-full max-w-[400px] flex-col gap-12">
                    <AuthTabs />
                    {children}
                </div>
            </section>
        </main>
    )
}
