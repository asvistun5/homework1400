import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";


export default function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={
                        <Home/>
                    }
                />
                <Route path="/posts/" element={
                        <Posts/>
                    }
                />
            </Route>
        </Routes>
    );
}