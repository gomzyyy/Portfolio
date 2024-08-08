import "./header.css"
import { Link } from "react-router-dom";

const Header = () =>{

    return(
    <nav className="navbar">
        <span className="logo">
           <Link to="/"><img src="./logo.png" className="logo-image" /></Link>
        </span>
        <ul className="nav-options">
            <li><Link className="nav-option" to="/">Home</Link></li>
            <li><Link className="nav-option" to="/education">Education</Link></li>
            <li><Link className="nav-option" to="/skills">Skills</Link></li>
            <li><Link className="nav-option" to="/blogs">Blogs</Link></li>
        </ul>
        <span className="nav-option contact">Contact?</span>
    </nav>
    )
}
export default Header;