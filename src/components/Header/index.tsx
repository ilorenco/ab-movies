import { LineVerticalIcon, PopcornIcon } from "@phosphor-icons/react"
import { FilmSlateIcon } from "@phosphor-icons/react"
import { MenuItem } from "./components/menu-item"
import { IconButton } from "../icon-button"
import Avatar from "../../assets/images/avatar.svg"

export function Header() {
    return (
        <header className="grid grid-cols-3 items-center border-b border-gray-200 px-6 py-4">
            <div className="flex items-center">
                <a href="/" aria-label="Página inicial">
                    <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
                </a>
            </div>

            <nav className="justify-self-center" aria-label="Menu principal">
                <ul className="flex items-center gap-6">
                    <MenuItem icon={PopcornIcon} label="Explorar" to="/" />
                    <MenuItem icon={FilmSlateIcon} label="Meus Filmes" to="/my-movies" />
                </ul>
            </nav>

            <section className="flex items-center justify-end" aria-label="Perfil e ações">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Olá, João</span>
                    <figure className="m-0 h-8 w-8 overflow-hidden rounded-md">
                        <img src={Avatar} alt="Avatar do usuário" />
                    </figure>
                </div>
                <span aria-hidden="true">
                    <LineVerticalIcon width={32} height={32} color="var(--color-gray-300)" />
                </span>
                <IconButton />
            </section>
        </header>
    )
}
