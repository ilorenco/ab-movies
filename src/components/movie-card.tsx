import { StarIcon } from "@phosphor-icons/react"
import coverImage from "../assets/images/Cover.svg"

export function MovieCard() {
    return (
        <article className="group relative aspect-7/10 w-full cursor-pointer overflow-hidden rounded-xl">
            <img
                src={coverImage}
                alt="Capa do filme Meu malvado favorito 4"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(9, 9, 16, 0) 0%, rgba(9, 9, 16, 0.8) 73%, rgba(9, 9, 16, 1) 100%)"
                }}
            />

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(9, 9, 16, 0.45) 0%, rgba(9, 9, 16, 0.9) 73%, rgba(9, 9, 16, 1) 100%)"
                }}
            />

            <aside
                className="font-rajdhani absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gray-100/80 px-2 py-1 text-gray-700 sm:top-5 sm:right-5 sm:gap-2 sm:px-4 sm:py-2"
                aria-label="Avaliação do filme"
            >
                <span className="text-base font-bold sm:text-xl">4,5</span>

                <span className="text-[10px] font-medium sm:text-xs" aria-hidden="true">
                    /
                </span>

                <span className="text-[10px] font-medium sm:text-xs">5</span>

                <StarIcon
                    className="h-3 w-3 shrink-0 sm:h-4 sm:w-4"
                    color="var(--color-gray-700)"
                    weight="fill"
                    aria-hidden="true"
                />
            </aside>

            <footer className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <h3 className="font-rajdhani text-base font-bold text-gray-700 sm:text-xl">
                    Meu malvado favorito 4
                </h3>

                <p className="font-nunito-sans flex items-center gap-1 text-xs font-bold text-gray-600 sm:text-sm">
                    <span>Animação</span>
                    <span aria-hidden="true">•</span>
                    <time dateTime="2024">2024</time>
                </p>

                <p className="font-nunito-sans mt-2 line-clamp-3 max-h-0 overflow-hidden text-sm text-gray-600 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    Gru, Lucy e as meninas dão as boas-vindas a um novo membro da família, Gru Jr.,
                    que pretende atormentar seu pai. Enquanto isso, o vilão Maxime Le Mal planeja
                    vingança contra Gru.
                </p>
            </footer>
        </article>
    )
}
