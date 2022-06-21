import gitHub from '../../assets/icons_skills/github.svg';
import linkedIn from '../../assets/icons_skills/linkedin.svg';
import mail from '../../assets/icons_skills/mail.svg';
import phone from '../../assets/icons_skills/phone.svg';

import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact" id='contact'>
            <h1 className="contact-title">Me contacter</h1>
            <div className="contact-container">
                <div className="left">
                    <h2 className="left-title">À propos de moi</h2>
                    <p>Après 12 ans d'exercice en tant qu'Infirmière, j'ai décidé d’opérer un virage professionnel en me reconvertissant dans le développement web.</p>
                    <p>J’ai effectué une formation de 6 mois avec l’école O’CLOCK de « Développeur Web & Web Mobile Fullstack JavaScript » avec une spécialisation REACT. </p>
                    <p>Désireuse de poursuivre mon évolution professionnelle, je suis à la recherche d'une première expérience afin de mettre en application les acquis de la formation, et poursuivre ma montée en compétences dans le développement web.</p>
                    <p>En attendant de décrocher mon premier poste, je continue à me former en autodidacte.</p>
                </div>

                <div className="right">
                    <h2 className="right-title">Suivez-moi</h2>
                    <div className="right-links">
                    </div>
                    <div className="right-content">
                        <p><img src={mail} alt="mail icon" /> Email: <a href="mailto:amelieforgeard@gmail.com">amelieforgeard@gmail.com</a></p>
                        <p><img src={gitHub} alt="github icon" /> Github: <a href="https://github.com/amelie-forgeard">@amelie-forgeard</a></p>
                        <p><img src={linkedIn} alt="linkedIn ico" /> Linkedin: <a href="https://www.linkedin.com/in/amelie-forgeard-17000lr/">Amélie FORGEARD</a></p>
                        <p><img src={phone} alt="phone icon" /> Téléphone: 06.66.86.41.97</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

