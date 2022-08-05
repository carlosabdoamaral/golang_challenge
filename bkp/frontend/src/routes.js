import { Routes, Route } from "react-router-dom"
import {IndexView} from "./views/IndexView"
import { NewUserView } from "./views/NewUserView"

export const ROUTES = _ => {
    return (
        <Routes>
            <Route path="/" element={<IndexView />} />
            <Route path="/new" element={<NewUserView />} />
        </Routes>
    )
}