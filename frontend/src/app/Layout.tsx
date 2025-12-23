import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import gitIcon from "../assets/icons/git.svg";


export default function Layout() {
    return (
        <div>
            <Nav/>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2025 Forum App</p>
                <div>
                    <img src={gitIcon}/>
                    <a href="https://github.com/asvistun5/" target="__blank">Автор: Artem Svistun</a>
                </div>
            </footer>
        </div>
    )
}