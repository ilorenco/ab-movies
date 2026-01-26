import { NavLink } from "react-router-dom"

export function AuthTabs() {
    return (
        <div className="flex w-full justify-center gap-1 rounded-[10px] bg-gray-200 p-1">
            <NavLink
                to="/login"
                className="aria-[current=page]:text-purple-light flex-1 rounded-md py-2 text-center text-gray-500 aria-[current=page]:bg-gray-300"
                aria-label="Login"
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                className="aria-[current=page]:text-purple-light flex-1 rounded-md py-2 text-center text-gray-500 aria-[current=page]:bg-gray-300"
                aria-label="Register"
            >
                Cadastro
            </NavLink>
        </div>
    )
}
