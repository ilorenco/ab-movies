import { FilmSlateIcon, XIcon } from "@phosphor-icons/react"

export function EmptyState() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-5 py-20"
            role="status"
            aria-live="polite"
        >
            <FilmSlateIcon
                width={45}
                height={45}
                color="var(--color-gray-400)"
                aria-hidden="true"
            />

            <p className="font-nunito-sans text-center text-base text-gray-600">
                Nenhum filme encontrado com <strong>"Filme ABC"</strong>
                <br />
                Que tal tentar outra busca?
            </p>

            <button
                type="button"
                aria-label="Limpar termo de busca"
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
            >
                <XIcon
                    width={20}
                    height={20}
                    color="var(--color-gray-500)"
                    weight="bold"
                    aria-hidden="true"
                />
                <span className="font-nunito-sans text-base text-gray-500">Limpar busca</span>
            </button>
        </section>
    )
}
