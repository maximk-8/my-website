import { useState, useEffect, useRef } from "react";
import image1 from "./_upscaled_image.png";
import {TagCloud} from '@frank-mayer/react-tag-cloud';
import useTypewriterEffect from "./useTypewriterEffect";
import useTextAnimation from "./useTextAnimation";

const Home = ({typewriterStorage}) => {
    const [gradientStart, setGradientStart] = useState('100%');
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            const aspectRatio = 2.35 / 1;
            const imageHeight = imageRef.current.offsetWidth / aspectRatio;
            setGradientStart(imageHeight);
        }
    }, []);

    useTypewriterEffect([textRef, textRef2], [10, 100], "home", typewriterStorage);
    useTextAnimation([textRef, textRef2]);

    return ( 
        <div>
            <div className="bg-black bg-cover relative text-white font-mono text-2xl/9">
                <div ref={imageRef} style={{
                    backgroundImage: `url(${image1}), linear-gradient(to bottom, black ${gradientStart - 100}px, #3E75B6 ${gradientStart + 400}px, #584993 ${gradientStart + 800}px, #9F3578)`, 
                    backgroundSize: '80%, 100%, 100%', 
                    backgroundRepeat: 'no-repeat, no-repeat', 
                    backgroundPosition: 'top right, top',
                    minHeight: '100vh' }}>

                    <div className="float-right" style={{ width: '80%', height: `${gradientStart+50}px`, shapeOutside: 'circle(40% at 60% 30%)' }}></div>

                    <div ref={textRef} className="text-justify pt-1-12 mx-1/7 space-y-16">
                        <p className="typewriter">
                            {
                                "I'm Maxim, a Computer Science graduate from UC San Diego. My academic journey was marked by a rigorous exploration of key concepts in technology, from machine learning to software engineering. This strong foundation has been pivotal in shaping my approach to the tech world."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                        <p className="typewriter">
                            {
                                "In my professional career, I have applied these principles to real-world challenges, focusing on enhancing system efficiency and developing innovative software solutions. My experience spans a range of technologies and methodologies, equipping me with a versatile skill set that I continuously expand and refine."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                        <p className="typewriter">
                            {
                                "I am passionate about tackling complex problems and optimizing user experiences. Proficient in various programming languages and tools, I am committed to driving progress and innovation in every project I undertake. My goal is to contribute meaningful advancements to the field of technology, leveraging my skills to make a significant impact in the industry."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                    </div>

                    <div ref={textRef2} className="text-center pt-1-12 mx-1/7 space-y-16">
                        <h2 className="font-bold typewriter"><span className="animated">Skills</span></h2>
                        <div className="flex justify-center">
                            <TagCloud
                                options={(w) => ({
                                    radius: Math.min(900, w.innerWidth, w.innerHeight) / 2,
                                    maxSpeed: "fast",
                                    keep: true
                                })}
                            >
                                {[
                                    "Java",
                                    "C",
                                    "C++",
                                    "JavaScript",
                                    "Python",
                                    "Scikit-learn",
                                    "PyTorch",
                                    "TensorFlow",
                                    "HTML/CSS",
                                    "React.js",
                                    "Node.js",
                                    "PostgreSQL"
                                ]}
                            </TagCloud>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Home;