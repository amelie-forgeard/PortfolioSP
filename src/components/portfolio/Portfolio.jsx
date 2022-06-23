import "./portfolio.scss";

import Apotheose from "../../assets/screenshots/capture.png"
import LogoReact from "../../assets/icons_skills/react.svg"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolio-title">Projets réalisés</h1>
            <div className="section">
                <div className="left">
                    <div className="imgContainer">
                        <img src={Apotheose} alt="apercu du formulaire d'inscription" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Projet de fin de formation</h2>
                        <h3>C du Props</h3>
                        <p>C du Props est une application web permettant d'organiser les tâches ménagères en famille, en couple, ou entre amis de façon ludique.</p>
                        <p>L'application a été développée en 3 semaines par une équipe de 5 développeurs dont je faisais partie. </p>
                        <p>Technos utilisées: REACT - Material UI</p>
                        <a href="https://youtu.be/-L8AGjsqhww?t=2796" target="_blank" rel="noreferrer">Voir la démo YouTube</a>
                        <a href="https://github.com/amelie-forgeard/projet-apo-front" target="_blank" rel="noreferrer">Voir le code source</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
