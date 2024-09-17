import "./header.css"
import "./header-responsive.css"
import { NavLink } from "react-router-dom";

const Options = ({handleMenu}) => {

    return (
        <ul className="options">
            <li onClick={handleMenu}><NavLink className="option" to="/">Home</NavLink></li>
            <li onClick={handleMenu}><NavLink className="option" to="/journey">Journey</NavLink></li>
            <li onClick={handleMenu}><NavLink className="option" to="/skills">Skills</NavLink></li>
            <li onClick={handleMenu}><NavLink className="option" to="/contact">Contact</NavLink></li>
        </ul>
    )
}
export default Options;