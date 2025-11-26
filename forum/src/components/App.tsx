import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles.css";
import gitIcon from "../assets/icons/git.svg";
import postsIco from "../assets/icons/posts.svg"
import Posts from "../pages/Posts";


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <main>
                    <h1>Ласкаво просимо на наш сайт!</h1>
                    <p>Forum — платформа для обміну<br/>цікавою інформацією</p>
                </main>
                <footer>
                    <p>© 2025 Forum App</p>
                    <div>
                        <img src={gitIcon}/>
                        <a href="https://github.com/asvistun5/" target="__blank">Автор: Artem Svistun</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export function Nav() {
    return (
        <nav>
            <h1>Forum</h1>
            <div>
                <button className="posts-btn"><img src={postsIco}/></button>
                <button className="signup">Реєстрація</button>
                <button className="signin">Увійти</button>
            </div>
        </nav>
    );
}