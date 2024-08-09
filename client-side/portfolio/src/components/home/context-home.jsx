import "./home.css"
import "./home-responsive.css"
import "../global.css"
import { NAME, ROLE, BREIF_TEXT, DISCRIPTION, SKILL_LABLE } from "../../assets/data"
import { Link } from "react-router-dom"

export const Left = () => {
 
    return(
        <div className="left">
        <div className="left-overview"><div className="profile-image">
            <span className="hover-box name">{NAME}</span>
            <img src="./me.png" alt="" />
        </div>
            <div className="info">
                <span className="info-name">{NAME},</span><span className="info-text"> I'm a </span><span className="info-role">{ROLE}</span>
                <span className="info-small">{BREIF_TEXT}</span>
            </div></div>
        <div className="info-discription">
            <p>{DISCRIPTION}</p>
        </div>
        <span className="contact-btn"><Link className="nav-option" to="/contact">Contact</Link></span>
    </div>
    )
};

export const Right = () =>{

    return(
        <div className="right">
            <div className="skills-overview">
                <div className="skill-lable">{SKILL_LABLE}</div>
            </div>
        </div>
    )
}