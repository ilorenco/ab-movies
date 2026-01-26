import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { MyMovies } from "../pages/my-movies"
import { Register } from "../pages/register"
import { Login } from "../pages/login"
import { AuthLayout } from "../layouts/auth-layout"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-movies" element={<MyMovies />} />
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}
