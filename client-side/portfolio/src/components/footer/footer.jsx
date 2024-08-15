import { NAME } from "../../assets/data";
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <footer className="py-3 my-4 footer">
            <div className="footer-container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="nav-Link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to="/journey" className="nav-Link px-2 text-body-secondary">Journey</Link></li>
                    <li className="nav-item"><Link to="/skills" className="nav-Link px-2 text-body-secondary">Skills</Link></li>
                    <li className="nav-item"><Link to="/blogs" className="nav-Link px-2 text-body-secondary">Blogs</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-Link px-2 text-body-secondary">Contact</Link></li>
                </ul>
                <p className="text-center text-body-secondary">Copyright © 2024 Portfolio:Gomzy_dhingra. All Rights Reserved.</p><br />
                <p className="text-center text-body-secondary">Made with 💌 by Dev: {NAME}</p>
            </div>
        </footer>
    )
}
export default Footer;