"use client"

import Image from "next/image"
import { MovieCard } from "@/components/movie-card"
import { ArrowLeftIcon, PopcornIcon, StarIcon } from "@phosphor-icons/react"
import { Button } from "@/components/button"
import { ReviewCard } from "@/components/review-card"
import { EmptyState } from "@/components/empty-state"
import coverImage from "@/assets/images/Cover.svg"

export default function MovieDetails() {
    const hasReviews = false

    return (
        <div className="flex flex-col gap-8 lg:gap-12">
            <div className="relative -mx-20 -mt-16">
                <div
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                    aria-hidden="true"
                >
                    <Image src={coverImage} alt="" fill className="object-cover" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(25, 19, 32, 0.93) 0%, rgba(15, 15, 26, 0.98) 80%, #0f0f1a 100%)"
                        }}
                    />
                </div>

                <div className="relative mx-auto flex max-w-[1070px] flex-col gap-8 px-6 pt-26 pb-10 lg:flex-row lg:gap-12">
                    <div className="w-full shrink-0 lg:w-[300px]">
                        <MovieCard />
                    </div>

                    <section>
                        <nav className="mb-4">
                            <button className="flex items-center gap-2 text-base text-gray-500">
                                <ArrowLeftIcon size={20} aria-hidden="true" />
                                Voltar
                            </button>
                        </nav>

                        <h1 className="font-rajdhani text-3xl font-bold text-gray-700">
                            Meu malvado favorito 4
                        </h1>

                        <dl className="mt-2 flex flex-col gap-1">
                            <div className="flex gap-1">
                                <dt className="text-base font-bold text-gray-600">Categoria:</dt>
                                <dd className="text-base text-gray-600">Animação</dd>
                            </div>
                            <div className="flex gap-1">
                                <dt className="text-base font-bold text-gray-600">Ano:</dt>
                                <dd className="text-base text-gray-600">
                                    <time dateTime="2024">2024</time>
                                </dd>
                            </div>
                        </dl>

                        <div
                            className="mt-4 mb-20 flex items-center gap-1"
                            aria-label="Avaliação: 4 de 5 estrelas, 5 avaliações"
                        >
                            <StarIcon
                                size={24}
                                weight="fill"
                                color="var(--color-purple-light)"
                                aria-hidden="true"
                            />
                            <StarIcon
                                size={24}
                                weight="fill"
                                color="var(--color-purple-light)"
                                aria-hidden="true"
                            />
                            <StarIcon
                                size={24}
                                weight="fill"
                                color="var(--color-purple-light)"
                                aria-hidden="true"
                            />
                            <StarIcon
                                size={24}
                                weight="fill"
                                color="var(--color-purple-light)"
                                aria-hidden="true"
                            />
                            <StarIcon
                                size={24}
                                color="var(--color-purple-light)"
                                aria-hidden="true"
                            />

                            <div className="ml-1 flex items-center gap-1">
                                <span className="font-rajdhani text-2xl font-bold text-gray-700">
                                    4
                                </span>
                                <span className="text-base text-gray-600">(5 avaliações)</span>
                            </div>
                        </div>

                        <p className="text-base text-gray-600">
                            Do cineasta Yorgos Lanthimos e da produtora Emma Stone, vem o conto
                            incrível e a evolução fantástica de Bella Baxter (Stone), uma jovem
                            mulher trazida de volta à vida pelo brilhante e pouco ortodoxo cientista
                            Dr. Godwin Baxter (Willem Dafoe). Sob a proteção de Baxter, Bella está
                            ansiosa para aprender. Faminta pela mundanidade que lhe falta, Bella
                            foge com Duncan Wedderburn (Mark Ruffalo), um advogado astuto e
                            depravado, em uma aventura relâmpago pelos continentes. Livre dos
                            preconceitos de sua época, Bella se torna firme em seu propósito de
                            defender a igualdade e a libertação.
                        </p>
                    </section>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[1070px] px-6 pb-10">
                <hr className="mb-8 border-gray-200 lg:mb-12" />

                <section>
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="font-rajdhani text-2xl font-bold text-gray-700">
                            Avaliações
                        </h2>
                        <Button className="w-auto font-normal">
                            <StarIcon size={20} color="var(--color-white)" aria-hidden="true" />
                            Avaliar
                        </Button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {hasReviews ? (
                            <>
                            <ReviewCard />
                            <ReviewCard />
                            </>
                        ) : (
                            <EmptyState
                                icon={
                                    <PopcornIcon
                                        width={45}
                                        height={45}
                                        color="var(--color-gray-400)"
                                        aria-hidden="true"
                                    />
                                }
                                message={
                                    <>
                                        Nenhuma avaliação registrada.
                                        <br />
                                        Que tal enviar o primeiro comentário?
                                    </>
                                }
                                action={
                                    <Button variant="ghost" className="w-auto">
                                        <StarIcon
                                            size={20}
                                            color="var(--color-gray-500)"
                                            aria-hidden="true"
                                        />
                                        Avaliar filme
                                    </Button>
                                }
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}
