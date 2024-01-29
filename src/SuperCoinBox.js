import useTextAnimation from "./useTextAnimation";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";

const SuperCoinBox = ({typewriterStorage}) => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useTextAnimation([textRef, textRef2]);
    useTypewriterEffect([textRef, textRef2], [100, 10], "superCoinBox", typewriterStorage);

    return (
        <div className="text-white font-mono text-2xl/9 min-h-screen" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div className="text-justify py-1-12 mx-1/7 space-y-16">
                <div ref={textRef}>
                    <h1 className="text-center font-bold typewriter">
                        {`Super Coin Box mini video game`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </h1>
                </div>
                <div ref={textRef2} className="space-y-8">
                    <p className="typewriter">
                        {`Welcome to Super Coin Box! This mini video game is designed to bring you a fun and engaging gaming experience right from your browser. The game is simple, yet addictive - collect as many coins as you can while avoiding the enemies.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`How to Play Super Coin Box`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`1. Game Window: The game window is located in the center of the page. This is where all the action happens!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`2. Collect Coins: Navigate your character around the game window to collect coins. Each coin you collect will increase your score.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`3. Avoid Enemies: Be careful of the enemies that appear in the game window. If you touch an enemy, you will lose a life.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`4. Game Over: The game ends when you lose all your lives. Your final score will be the total number of coins you collected.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`5. Pause Game: Want to pause the game? Simply click anywhere outside the game window to pause. Click inside to resume.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`Enjoy the game and aim for a high score!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                </div>
                <div className="flex items-center justify-center pt-16" style={{ transform: 'scale(1.3)'}}>
                    <div style={{ 
                        border: '8px solid', 
                        borderImageSlice: 1, 
                        borderImageSource: 'conic-gradient(#f99, #9f9, #99f, #f99)' 
                    }}>
                        <iframe title="Super Coin Box Game" src="https://properex.com/max/" width="500" height="340" scrolling="no"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperCoinBox;