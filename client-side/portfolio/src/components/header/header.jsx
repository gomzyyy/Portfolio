import "./header.css"
import { Link } from "react-router-dom";

const Header = () =>{

    return(
    <nav className="navbar">
        <ul className="nav-options">
            <li><Link className="nav-option" to="/">Home</Link></li>
            <li><Link className="nav-option" to="/education">Education</Link></li>
            <li><Link className="nav-option" to="/skills">Skills</Link></li>
            <li><Link className="nav-option" to="/blogs">Blogs</Link></li>
            <li><Link className="nav-option" to="/contact">Contact</Link></li>
        </ul>
    </nav>
    )
}
export default Header;