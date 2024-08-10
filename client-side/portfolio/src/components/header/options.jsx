import "./header.css"
import "./header-responsive.css"
import { Link } from "react-router-dom";

const Options = ({handleMenu}) => {

    return (
        <ul className="options">
            <li onClick={handleMenu}><Link className="option" to="/">Home</Link></li>
            <li onClick={handleMenu}><Link className="option" to="/journey">Journey</Link></li>
            <li onClick={handleMenu}><Link className="option" to="/skills">Skills</Link></li>
            <li onClick={handleMenu}><Link className="option" to="/blogs">Blogs</Link></li>
            <li onClick={handleMenu}><Link className="option" to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Options;