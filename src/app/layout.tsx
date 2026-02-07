import type { Metadata } from "next"
import { Nunito_Sans, Rajdhani, Rammetto_One } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-nunito-sans",
    display: "swap"
})

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-rajdhani",
    display: "swap"
})

const rammettoOne = Rammetto_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-rammetto-one",
    display: "swap"
})

export const metadata: Metadata = {
    title: "AB Movies",
    icons: {
        icon: "/logo.svg"
    }
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="pt-BR"
            className={`${nunitoSans.variable} ${rajdhani.variable} ${rammettoOne.variable}`}
        >
            <body>{children}</body>
        </html>
    )
}
