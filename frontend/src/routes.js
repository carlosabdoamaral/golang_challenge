import { Route, Routes } from "react-router-dom"
import { CreatePersonView } from "./views/CreatePersonView"
import { HomeView } from "./views/HomeView"

export const URLS = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/new" element={<CreatePersonView/>}/>
        </Routes>
    )
}