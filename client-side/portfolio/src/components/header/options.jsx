import "./header.css"
import "./header-responsive.css"
import { Link } from "react-router-dom";

const Options = () => {

    return (
        <ul className="options">
            <li><Link className="option" to="/">Home</Link></li>
            <li><Link className="option" to="/education">Education</Link></li>
            <li><Link className="option" to="/skills">Skills</Link></li>
            <li><Link className="option" to="/blogs">Blogs</Link></li>
            <li><Link className="option" to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Options;