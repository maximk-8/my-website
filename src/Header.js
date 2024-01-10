import { Link } from "react-router-dom";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";
import useHoverAnimation from "./useHoverAnimation";
import { motion } from "framer-motion";

const Header = () => {
    const headerRef = useRef(null);
    useTypewriterEffect([headerRef], 100, "header");

    const c1 = useHoverAnimation("color");
    const c2 = useHoverAnimation("color");
    const c3 = useHoverAnimation("color");

    const handleMouseLeave = () => {
        c1.handleMouseLeave();
        c2.handleMouseLeave();
        c3.handleMouseLeave();
    }

    return ( 
        <div ref={headerRef} className="flex justify-evenly py-5 text-white font-mono text-2xl/9 font-bold" style={{
            backgroundImage: "linear-gradient(to right, #3E75B6, #584993, #9F3578)"
        }}>
            <Link to='/' className="typewriter">
                <motion.span className="inline-block" animate={c1.controls} onMouseEnter={c1.handleMouseEnter} onMouseLeave={handleMouseLeave}>HOME</motion.span>
            </Link>
            <Link to='/projects' className="typewriter">
                <motion.span className="inline-block" animate={c2.controls} onMouseEnter={c2.handleMouseEnter} onMouseLeave={handleMouseLeave}>PROJECTS</motion.span>
            </Link>
            <Link to='/about' className="typewriter">
                <motion.span className="inline-block" animate={c3.controls} onMouseEnter={c3.handleMouseEnter} onMouseLeave={handleMouseLeave}>ABOUT ME</motion.span>
            </Link>
        </div>
    );
}
 
export default Header;