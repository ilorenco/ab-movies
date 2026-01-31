import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="px-20 pt-16">
                <Outlet />
            </main>
        </>
    )
}
