import "../styles.css";
import 'material-icons/iconfont/material-icons.css';


export default function App() {
    return (
        <div>
            <Nav/>
            <main>
                <h1>Ласкаво просимо на наш сайт!</h1>
                <p>Forum — платформа для обміну<br/>цікавою інформацією</p>
            </main>
        </div>
    );
}

export function Nav() {
    return (
        <nav>
            <h1>Forum</h1>
            <button className="posts-btn"><span className="material-icons">email</span></button>
            <button className="signup">Реєстрація</button>
            <button className="signin">Увійти</button>
        </nav>
    );
}