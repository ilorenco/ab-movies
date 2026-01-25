import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { MyMovies } from "../pages/my-movies"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-movies" element={<MyMovies />} />
        </Routes>
    )
}
