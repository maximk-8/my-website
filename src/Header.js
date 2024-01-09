import { Link } from "react-router-dom";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";

const Header = () => {
    const headerRef = useRef(null);
    useTypewriterEffect([headerRef], 100, "header");

    return ( 
        <div ref={headerRef} className="flex justify-evenly py-5 text-white font-mono text-2xl/9 font-bold" style={{
            backgroundImage: "linear-gradient(to right, #3E75B6, #584993, #9F3578)"
        }}>
            <Link to='/' className="typewriter"><span className="animated">HOME</span></Link>
            <Link to='/projects' className="typewriter"><span className="animated">PROJECTS</span></Link>
            <Link to='/about' className="typewriter"><span className="animated">ABOUT ME</span></Link>
        </div>
    );
}
 
export default Header;