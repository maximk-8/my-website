import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="bg-gray-400 flex justify-center py-5 justify-evenly">
            <Link to='/' className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to='/projects' className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link to='/about' className="text-gray-700 hover:text-gray-900">About me</Link>
        </div>
    );
}
 
export default Header;