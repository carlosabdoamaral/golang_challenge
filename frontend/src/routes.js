import { Routes, Route } from "react-router-dom"
import {IndexView} from "./views/IndexView"

export const ROUTES = _ => {
    return (
        <Routes>
            <Route path="/" element={<IndexView />} />
        </Routes>
    )
}