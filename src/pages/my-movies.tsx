import { Input } from "../components/input"
import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react"
import { EmptyState } from "../components/empty-state"
import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"

export function MyMovies() {
    const navigate = useNavigate()

    return (
        <>
            <header className="flex items-center justify-between pb-20">
                <h1 className="font-rammetto-one text-2xl text-[#E5E2E9]">Meus Filmes</h1>

                <div className="flex items-center gap-4">
                    <Input placeholder="Buscar" icon={<MagnifyingGlassIcon />} />
                    <Button onClick={() => navigate("/new-movie")}>
                        <PlusIcon size={20} weight="bold" />
                        Novo
                    </Button>
                </div>
            </header>

            <EmptyState />
        </>
    )
}
