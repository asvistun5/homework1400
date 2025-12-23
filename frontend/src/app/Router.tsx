import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";


export default function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
            </Route>
        </Routes>
    );
}