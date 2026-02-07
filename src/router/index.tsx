import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { MyMovies } from "../pages/my-movies"
import { Register } from "../pages/register"
import { Login } from "../pages/login"
import { AuthLayout } from "../layouts/auth-layout"
import { DefaultLayout } from "../layouts/default-layout"
import { NewMovie } from "../pages/new-movie"

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/my-movies" element={<MyMovies />} />
                <Route path="/new-movie" element={<NewMovie />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}
