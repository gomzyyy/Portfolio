import "./header.css"

const Header = () =>{

    return(<>
    <nav className="navbar">
        <span className="logo">
            <img src="" className="logo-image" />
        </span>
        <ul className="nav-options">
            <li className="nav-option">Home</li>
            <li className="nav-option">Education</li>
            <li className="nav-option">Skills</li>
            <li className="nav-option">Contact</li>
        </ul>
    </nav>
    </>)
}
export default Header;