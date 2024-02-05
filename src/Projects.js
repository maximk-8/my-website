import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";
import useHoverAnimation from "./useHoverAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useTextAnimation from "./useTextAnimation";

const Projects = ({typewriterStorage}) => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRef5 = useRef(null);
    const textRef6 = useRef(null);

    useTypewriterEffect([textRef, textRef2, textRef3, textRef4, textRef5, textRef6], [10, 100, 100, 100, 100, 100], "projects", typewriterStorage);

    const c1 = useHoverAnimation("color");
    useTextAnimation([textRef]);

    return ( 
        <div className="text-white font-mono text-2xl/9" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div ref={textRef} className="text-justify py-1-12 mx-1/7 space-y-16">
                <h1 className="font-bold text-center typewriter">{`Welcome to my workshop of innovation and code`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}</h1>
                <p className="typewriter">
                    {
                        `Here, you'll discover a diverse portfolio of projects that encapsulate my passion for 
                        technology and problem-solving. Explore the cutting edge of artificial intelligence 
                        with an ML-based text summarizer, trace the interconnected data flows of a Graph API, 
                        delve into the efficient elegance of a Huffman Coding text compressor, immerse yourself 
                        in the crafted world of a mini video game, and accelerate your reading with a 
                        JavaScript-driven speed reader. Each project represents a unique challenge and a 
                        skill honed. These projects are a testament to my journey in software engineering, a 
                        journey marked by continual learning and a desire to push the boundaries of what's possible. 
                        I invite you to play around with them, examine their inner workings, and see for yourself 
                        the outcomes of dedication and creativity.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)
                    }
                </p>
            </div>
            <div className="pb-1-12 space-y-32">
                <div ref={textRef3}>
                    <h3 className="font-bold text-center pb-8 typewriter"><motion.span className="inline-block" animate={c1.controls}>Graph API</motion.span></h3>
                    <Link to="./graph-api"><div id="box2" className="image-box"></div></Link>
                </div>
                <div ref={textRef5}>
                    <h3 className="font-bold text-center pb-8 typewriter"><motion.span className="inline-block" animate={c1.controls}>Super Coin Box mini video game</motion.span></h3>
                    <Link to="./super-coin-box"><div id="box4" className="image-box"></div></Link>
                </div>
                <div ref={textRef6}>
                    <h3 className="font-bold text-center pb-8 typewriter"><motion.span className="inline-block" animate={c1.controls}>Speed Reader</motion.span></h3>
                    <Link to="./speed-reader"><div id="box5" className="image-box"></div></Link>
                </div>
                <div ref={textRef2}>
                    <h3 className="font-bold text-center pb-8 typewriter"><motion.span className="inline-block" animate={c1.controls}>ML-based text summarizer</motion.span></h3>
                    <Link to="./text-summarizer"><div id="box1" className="image-box"></div></Link>
                </div>
                <div ref={textRef4}>
                    <h3 className="font-bold text-center pb-8 typewriter"><motion.span className="inline-block" animate={c1.controls}>Huffman Coding text compressor</motion.span></h3>
                    <Link to="./huffman-coding"><div id="box3" className="image-box"></div></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;