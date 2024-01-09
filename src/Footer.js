import { motion } from "framer-motion";

const animations = {
    stroke: ["#FFD700", "#00f900", "#f90053", "#1effa9", "#FFD700"],
    scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
    rotate: [0, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 0]
};

const transition = {
    stroke: { duration: 5, repeat: Infinity },
    scale: { duration: 1.7, repeat: Infinity, repeatDelay: 5 },
    rotate: { duration: 1.7, repeat: Infinity, repeatDelay: 5 }
};

const linkedInLogo = (
    <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="icon icon-tabler icon-tabler-brand-linkedin" 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
        strokeLinejoin="round" 
        animate={animations} 
        transition={transition} 
        whileHover={{ scale: 1.2, rotate: 0, stroke: "#ffffff", transition: { duration: 0.5 } }}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </motion.svg>
);

const githubLogo = (
    <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="icon icon-tabler icon-tabler-brand-github" 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        animate={animations} 
        transition={transition} 
        whileHover={{ scale: 1.2, rotate: 0, stroke: "#ffffff", transition: { duration: 0.2 } }}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </motion.svg>
);

const Footer = () => {
    return ( 
        <div className="flex justify-evenly py-5 text-white font-mono text-2xl/9 font-bold" style={{
            backgroundImage: "linear-gradient(to right, #3E75B6, #584993)"
        }}>
            <a href="https://www.linkedin.com/in/maximkondrashuk/" target="_blank" rel="noopener noreferrer" className="">{linkedInLogo}</a>
            <a href="https://github.com/maximk-8" target="_blank" rel="noopener noreferrer" className="">{githubLogo}</a>
        </div>
    );
}

export default Footer;