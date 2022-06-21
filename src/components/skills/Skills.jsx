import './skills.scss';
import dataSkills from '../../functions/icons';

export default function Skills() {
    return (
        <div id="competences">
            <div className="skills" id='skills'>
                <h1 className="skills-title">Compétences</h1>
                <h2 className="skills-subtitle">Les langages, outils et frameworks que j’utilise</h2>
                <ul className="skills-list">
                    {dataSkills.map((skill) => (
                        <li className="skills-list-skill" key={skill.icon}>
                            <img src={skill.icon} alt="" className="skills-list-skill-icon" />
                            <p className="skills-list-skill-title">{skill.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
