import postsIco from "../assets/icons/posts.svg"

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