import { Header } from "@/components/Header"

export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="px-20 pt-16">{children}</main>
        </>
    )
}
