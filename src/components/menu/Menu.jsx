import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a className="menuLink" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}