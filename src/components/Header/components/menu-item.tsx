import type { IconProps } from "@phosphor-icons/react"
import type { ComponentType } from "react"
import { NavLink } from "react-router-dom"

interface MenuItemProps {
    icon: ComponentType<IconProps>
    label: string
    to: string
}

export function MenuItem({ icon: Icon, label, to }: MenuItemProps) {
    return (
        <NavLink
            to={to}
            className="group flex min-w-32 cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-[10px] hover:bg-gray-200 aria-[current=page]:bg-gray-300"
        >
            <Icon
                width={20}
                height={20}
                className="group-aria-[current=page]:text-purple-light text-gray-500"
            />
            <span className="group-aria-[current=page]:text-purple-light text-gray-500">
                {label}
            </span>
        </NavLink>
    )
}
