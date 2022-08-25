import { Route, Routes } from "react-router"
import { IndexView } from "./views/IndexView"
import { ReposView } from "./views/ReposView"

export const URLS = () => {
    <Routes>
        <Route path="/rep" element={<ReposView/>} />
    </Routes>
}