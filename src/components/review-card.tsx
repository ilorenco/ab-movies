import Image from "next/image"
import { StarIcon } from "@phosphor-icons/react"
import avatarImage from "@/assets/images/avatar.svg"

export function ReviewCard() {
    return (
        <article
            className="flex w-full flex-col gap-4 rounded-xl bg-gray-200 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8"
            aria-label="Avaliação de Jordan Felix"
        >
            <header className="flex shrink-0 items-center gap-4 sm:w-56">
                <Image
                    src={avatarImage}
                    alt="Avatar de Jordan Felix"
                    width={48}
                    height={48}
                    className="shrink-0"
                />

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                        <h3 className="font-rajdhani text-base font-bold text-gray-700">
                            Jordan Felix
                        </h3>
                        <span className="bg-purple-base rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            você
                        </span>
                    </div>
                    <span className="text-sm text-gray-500">4 filmes avaliados</span>
                </div>
            </header>

            <div
                className="hidden w-px self-stretch bg-gray-300 sm:block"
                role="separator"
                aria-orientation="vertical"
            />

            <blockquote className="flex-1 text-base leading-relaxed text-gray-600">
                Uma fusão hipnotizante de drama e fantasia, este filme nos leva a um universo
                surreal repleto de simbolismo e emoção. A história é delicadamente tecida com
                momentos de profunda reflexão, enquanto os personagens navegam por dilemas humanos
                em meio a paisagens encantadas.
            </blockquote>

            <aside
                className="flex shrink-0 items-center gap-1 self-start rounded-md bg-gray-300 px-3 py-2 text-gray-700"
                aria-label="Nota: 4 de 5 estrelas"
            >
                <span className="font-rajdhani text-xl leading-none font-bold text-gray-700">
                    4
                </span>
                <span
                    className="font-rajdhani text-xs leading-none text-gray-700"
                    aria-hidden="true"
                >
                    /5
                </span>
                <StarIcon
                    className="h-4 w-4 shrink-0"
                    color="var(--color-purple-base)"
                    weight="fill"
                    aria-hidden="true"
                />
            </aside>
        </article>
    )
}
