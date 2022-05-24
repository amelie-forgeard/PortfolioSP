// import { Menu } from "@material-ui/core"
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works"

import "./app.scss"
import { useState } from "react"

export default function App() {
    //par défault, le menu est fermé:
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Contact />
            </div>
        </div>
    )
}
