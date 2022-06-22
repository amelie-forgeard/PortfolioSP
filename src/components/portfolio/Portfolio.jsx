import "./portfolio.scss";

import Apotheose from "../../assets/screenshots/capture.png"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="left">
                <div className="imgContainer">
                    <img src={Apotheose} alt="apercu du formulaire d'inscription" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Projet de Fin d'Etudes</h2>
                    <h1>C du Props</h1>
                </div>
            </div>
        </div>
    )
}
