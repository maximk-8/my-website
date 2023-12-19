import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="header-links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About me</Link>
        </div>
    );
}
 
export default Header;