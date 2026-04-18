"use client"

import { Input } from "@/components/input"
import { FilmSlateIcon, MagnifyingGlassIcon, PlusIcon, XIcon } from "@phosphor-icons/react"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/button"
import { useRouter } from "next/navigation"

export default function MyMovies() {
    const router = useRouter()

    return (
        <>
            <header className="flex items-center justify-between pb-20">
                <h1 className="font-rammetto-one text-2xl text-[#E5E2E9]">Meus Filmes</h1>

                <div className="flex items-center gap-4">
                    <Input placeholder="Buscar" icon={<MagnifyingGlassIcon />} />
                    <Button onClick={() => router.push("/new-movie")}>
                        <PlusIcon size={20} weight="bold" />
                        Novo
                    </Button>
                </div>
            </header>

            <EmptyState
                icon={
                    <FilmSlateIcon
                        width={45}
                        height={45}
                        color="var(--color-gray-400)"
                        aria-hidden="true"
                    />
                }
                message={
                    <>
                        Nenhum filme encontrado com <strong>"Filme ABC"</strong>
                        <br />
                        Que tal tentar outra busca?
                    </>
                }
                action={
                    <Button variant="ghost" className="w-auto" aria-label="Limpar termo de busca">
                        <XIcon
                            size={20}
                            color="var(--color-gray-500)"
                            weight="bold"
                            aria-hidden="true"
                        />
                        Limpar busca
                    </Button>
                }
            />
        </>
    )
}
