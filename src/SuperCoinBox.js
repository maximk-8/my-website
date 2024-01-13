import useTextAnimation from "./useTextAnimation";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";
import Lottie from "react-lottie";
import animationData from "./lottieAnimation.json";
import rocketData from "./rocketAnimation.json";

const SuperCoinBox = ({typewriterStorage}) => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useTextAnimation([textRef, textRef2]);
    useTypewriterEffect([textRef, textRef2], [100, 10], "superCoinBox", typewriterStorage);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const rocketOptions = {
        loop: true,
        autoplay: true, 
        animationData: rocketData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="text-white font-mono text-2xl/9 min-h-screen" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div className="text-justify py-1-12 mx-1/7 space-y-16">
                <div ref={textRef}>
                    <h1 className="text-center font-bold typewriter">
                        {`Super Coin Box mini video game`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </h1>
                    <div className="pt-16">
                        <Lottie options={defaultOptions} height={600} width={600} />
                    </div>
                </div>
                <div ref={textRef2} className="flex items-center justify-center text-lg space-x-2">
                    <p className="typewriter text-center">
                        {
                            `Almost there! Project's ready, just working on connecting it to the website. 
                             Stay tuned for the full experience!`
                             .split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)
                        }
                    </p>
                    <div className="ml-2">
                        <Lottie options={rocketOptions} height={75} width={75} />
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default SuperCoinBox;