import useTextAnimation from "./useTextAnimation";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";
import SpeedReaderProject from "./SpeedReaderProject";

const SpeedReader = ({typewriterStorage}) => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useTextAnimation([textRef, textRef2]);
    useTypewriterEffect([textRef, textRef2], [100, 10], "speedReader", typewriterStorage);

    return (
        <div className="text-white font-mono text-2xl/9 min-h-screen" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div className="text-justify py-1-12 mx-1/7 space-y-16">
                <div ref={textRef}>
                    <h1 className="text-center font-bold typewriter">
                        {`Speed Reader`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </h1>
                </div>
                <div ref={textRef2} className="space-y-8">
                    <p className="typewriter">
                        {`Welcome to the Speed Reader! This application is designed to help you improve your reading speed and comprehension. It works by displaying text one word at a time at a speed you set, allowing you to focus on each word as it's displayed. This method of reading can help you increase your reading speed, as it reduces the time spent on eye movement and prevents backtracking.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`How to Use the Speed Reader`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`1. Input Text: In the large text area at the top of the page, you can input the text you want to read. You can type in your own text or paste text from another source.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`2. Set Reading Speed: Use the slider below the text area to set your desired reading speed in words per minute (WPM). The number next to the slider shows the current speed setting.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`3. Start Reading: Click the play button to start reading. The words will be displayed one at a time in the box below the text area at the speed you set.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`4. Pause/Resume Reading: You can pause the reading at any time by clicking the pause button. Click the play button again to resume reading from where you left off.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`5. Restart Reading: If you want to start reading from the beginning, click the restart button.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`Enjoy your reading!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                </div>
                <div>
                    <SpeedReaderProject />
                </div>
            </div>
        </div>
    );
}

export default SpeedReader;

/*

Welcome to the Speed Reader! This application is designed to help you improve your reading speed and comprehension. It works by displaying text one word at a time at a speed you set, allowing you to focus on each word as it's displayed. This method of reading can help you increase your reading speed, as it reduces the time spent on eye movement and prevents backtracking.

How to Use the Speed Reader
Input Text: In the large text area at the top of the page, you can input the text you want to read. You can type in your own text or paste text from another source.

Set Reading Speed: Use the slider below the text area to set your desired reading speed in words per minute (WPM). The number next to the slider shows the current speed setting.

Start Reading: Click the play button to start reading. The words will be displayed one at a time in the box below the slider at the speed you set.

Pause/Resume Reading: You can pause the reading at any time by clicking the pause button. Click the play button again to resume reading from where you left off.

Restart Reading: If you want to start reading from the beginning, click the restart button.

Enjoy your reading!
*/