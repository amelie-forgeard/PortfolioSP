import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#intro">Accueil</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#works">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}