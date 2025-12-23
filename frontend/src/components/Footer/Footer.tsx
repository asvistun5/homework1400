import gitIcon from "../../assets/icons/git.svg";


export default function Footer() {
    return (
        <footer>
            <p>© 2025 Forum App</p>
            <div>
                <img src={gitIcon}/>
                <a href="https://github.com/asvistun5/" target="__blank">Автор: Artem Svistun</a>
            </div>
        </footer>
    )
}