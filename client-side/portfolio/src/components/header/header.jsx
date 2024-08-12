import "./header.css"
import "./header-responsive.css"
import "../global.css"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Options from "./options";
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import MutualStates from "../../contextAPI";

const Header = () =>{

    const {menu, handleMenu} = useContext(MutualStates);

    return(
    <nav className="navbar" style={{ height: menu ? "160px" : "80px"}}>
        <ul className="nav-options">
            <li><NavLink className={({isActive})=>(isActive ? "nav-option col-orange" : "nav-option col-black" )} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? "nav-option col-orange" : "nav-option col-black" )} to="/journey">Journey</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? "nav-option col-orange" : "nav-option col-black" )} to="/skills">Skills</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? "nav-option col-orange" : "nav-option col-black" )} to="/blogs">Blogs</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? "nav-option col-orange" : "nav-option col-black" )} to="/contact">Contact</NavLink></li>
        </ul>
        <span className="sidebar-toggle" onClick={handleMenu}>{menu ? <IoMdClose  /> : <IoMdMenu/> }</span>
        {menu && <Options handleMenu={handleMenu}/>}
    </nav>
    )
}
export default Header;