"use client"

import { CalendarBlankIcon, FilmSlateIcon, TagIcon, UploadSimpleIcon } from "@phosphor-icons/react"
import { Input } from "@/components/input"
import { TextArea } from "@/components/text-area"
import { Button } from "@/components/button"

export default function NewMovie() {
    return (
        <div className="mx-auto flex max-w-[1070px] flex-col gap-8 px-6 py-10 lg:flex-row lg:gap-12">
            <div className="flex h-[300px] w-full shrink-0 flex-col items-center justify-center gap-3 rounded-[18px] bg-gray-300 lg:h-[490px] lg:w-[381px]">
                <UploadSimpleIcon width={40} height={40} color="var(--color-purple-light)" />
                <p className="font-nunito-sans text-base text-gray-500">Fazer upload</p>
            </div>

            <div className="flex flex-1 flex-col gap-4 lg:max-w-[641px]">
                <h1 className="font-rajdhani pb-1 text-xl font-bold text-gray-700">Novo filme</h1>

                <Input
                    placeholder="Título"
                    icon={<FilmSlateIcon width={20} height={20} color="var(--color-gray-500)" />}
                />

                <div className="flex w-full flex-col gap-4 sm:flex-row">
                    <Input
                        placeholder="Ano"
                        icon={
                            <CalendarBlankIcon
                                width={20}
                                height={20}
                                color="var(--color-gray-500)"
                            />
                        }
                        wrapperClassName="flex-1"
                    />
                    <Input
                        placeholder="Categoria"
                        icon={<TagIcon width={20} height={20} color="var(--color-gray-500)" />}
                        wrapperClassName="flex-1"
                    />
                </div>

                <TextArea placeholder="Descrição" />

                <div className="flex justify-end gap-4 pt-4">
                    <Button variant="ghost" className="w-auto">
                        Cancelar
                    </Button>
                    <Button className="w-auto min-w-[88px]">Salvar</Button>
                </div>
            </div>
        </div>
    )
}
