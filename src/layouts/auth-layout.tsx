import { Outlet } from "react-router-dom"
import HeroPanel from "../assets/images/hero-panel.svg"
import { AuthTabs } from "../components/auth-tabs"

export function AuthLayout() {
    return (
        <main className="flex min-h-screen">
            <aside className="flex w-1/2 flex-col items-center justify-center" aria-label="Hero panel">
                <img src={HeroPanel} alt="Hero Panel" className="h-auto max-w-full" />
            </aside>
            <section className="flex w-1/2 flex-col items-center justify-center">
                <div className="flex w-full max-w-[400px] flex-col gap-12">
                    <AuthTabs />
                    <Outlet />
                </div>
            </section>
        </main>
    )
}
