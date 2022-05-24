import "./topbar.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Topbar() {
    return (
        <div className="topbar active">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> AF. </a>
                    <div className="itemContainer">
                        <MailOutlineIcon className="icon" />
                        <span>amelieforgeard@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LocalPhoneIcon className="icon" />
                        <span>+33 6 66 86 41 97</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>            </div>

        </div>
    )
}

