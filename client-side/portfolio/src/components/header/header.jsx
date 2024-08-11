import "./header.css"
import "./header-responsive.css"
import "../global.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import Options from "./options";
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const Header = () =>{

const [menu, setMenu] = useState(false)
const handleMenu = () => {
    setMenu(p=>!p);
    console.log("clicked")
}


    return(
    <nav className="navbar" style={{ height: menu ? "160px" : "80px"}}>
        <ul className="nav-options">
            <li><Link className="nav-option" to="/">Home</Link></li>
            <li><Link className="nav-option" to="/journey">Journey</Link></li>
            <li><Link className="nav-option" to="/skills">Skills</Link></li>
            <li><Link className="nav-option" to="/blogs">Blogs</Link></li>
            <li><Link className="nav-option" to="/contact">Contact</Link></li>
        </ul>
        <span className="sidebar-toggle" onClick={handleMenu}>{menu ? <IoMdClose  /> : <IoMdMenu/> }</span>
        {menu && <Options handleMenu={handleMenu}/>}
    </nav>
    )
}
export default Header;