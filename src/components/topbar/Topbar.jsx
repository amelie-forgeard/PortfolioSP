import "./topbar.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> AF. </a>
                    <div className="itemContainer">
                        <MailOutlineIcon className="icon" />
                        <p ><a className="itemContainer-mail" href="mailto:amelieforgeard@gmail.com">amelieforgeard@gmail.com</a></p>
                    </div>
                    <div className="itemContainer">
                        <LocalPhoneIcon className="icon" />
                        <span>+33 6 66 86 41 97</span>
                    </div>
                </div>
                <div className="right">
                    {/* au clic sur le menu burger, je veux l'inverse du booléen */}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>            </div>

        </div>
    )
}

