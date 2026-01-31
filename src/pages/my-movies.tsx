import { MovieCard } from "../components/movie-card"
import { Input } from "../components/input"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"

export function MyMovies() {
    return (
        <>
            <header className="flex items-center justify-between pb-20">
                <h1 className="font-rammetto-one text-2xl text-[#E5E2E9]">Meus Filmes</h1>
                <Input placeholder="Buscar" icon={<MagnifyingGlassIcon />} />
            </header>

            <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
        </>
    )
}
