import { useState, useEffect, useRef } from "react";
import image1 from "./upscaled_image.png";
import {TagCloud} from '@frank-mayer/react-tag-cloud';
import useTypewriterEffect from "./useTypewriterEffect";
import useTextAnimation from "./useTextAnimation";

const Home = () => {
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

    useTextAnimation([textRef, textRef2]);
    useTypewriterEffect([textRef, textRef2], 10, "home");

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
                                "My name is Maxim. I graduated from UC San Diego in March 2023 with a Bachelor of Science in Computer Science. With a strong academic record, I blend a rigorous educational background with hands-on experience in software engineering. Embarking on a comprehensive exploration of computer science, my journey has equipped me with a deep understanding of complex problem-solving, intelligent system design, and the assurance of technological robustness. This experience has granted me a profound insight into the interplay between theoretical foundations and their practical applications in the tech landscape."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                        <p className="typewriter">
                            {
                                "During my internship at General Atomics, I engaged deeply with flight-critical software, sharpening my analytical skills and playing a pivotal role in enhancing system safety and performance. My proactive approach to problem-solving and meticulous attention to code quality were instrumental in accelerating software delivery and strengthening system robustness."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                        <p className="typewriter">
                            {
                                "Since graduating from UC San Diego, I have immersed myself in a variety of projects that have broadened my technical expertise and provided extensive hands-on experience. This continuous journey of learning and application has not only solidified my proficiency in a range of technologies but also honed my ability to craft dynamic solutions that meet complex challenges. My commitment to technology extends beyond academic knowledge, embracing the practical intricacies of software development and the innovative spirit of the industry."
                                    .split(' ')
                                    .map((word, i) => <span key={i} className="animated">{word} </span>)
                            }
                        </p>
                        <p className="typewriter">
                            {
                                "As a technology enthusiast and proactive problem solver, I am proficient in a variety of programming languages and tools. With a readiness to embrace challenges and a drive to extend the limits of what's possible in software development, I am eager to collaborate and innovate."
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