import React, { useEffect, useRef, useState } from 'react';

function SpeedReaderProject() {
    const inputRef = useRef();
    const outputRef = useRef();
    const sliderRef = useRef();
    const wpmDisplayRef = useRef();
    const [sliderValue, setSliderValue] = useState(400);

    useEffect(() => {
        let start;
        let i = 0;
        let input;
        let speed = Number(sliderRef.current.value);
        wpmDisplayRef.current.innerHTML = sliderRef.current.value;

        function myFunction() {
            clearInterval(start);
            input = inputRef.current.value.split(/-/);
            for(let a = 0; a < input.length-1; a++){
                input[a] = input[a] + "-";
            }
            input = input.join(" ");
            input = input.split(/\s/);
            input.forEach(function(element, index){
                if(element === ""){
                    input.splice(index, 1);
                }
            })
            let normalTime = Number(speed);
            start = setInterval(function() {
                normalTime = Number(speed);
                if(input[i]===input[input.length-1]){
                    clearInterval(start);
                }
                let counter = input[i];
                outputRef.current.value = counter;
                i++;
            }, 60000 / normalTime);
        }

        function stop() {
            clearInterval(start);
        }

        function restart() {
            i = 1;
            outputRef.current.value = input[0];
        }

        sliderRef.current.oninput = function() {
            wpmDisplayRef.current.innerHTML = this.value;
            speed = this.value;
            stop();
        }

        // Attach event handlers
        document.querySelector('.play-button').addEventListener('click', myFunction);
        document.querySelector('.pause-button').addEventListener('click', stop);
        document.querySelector('.restart-button').addEventListener('click', restart);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <textarea ref={inputRef} className="bg-transparent text-justify border-8 py-1 px-3" style={{width:700, height:500, resize:'none', borderImageSlice: 1, borderImageSource: 'conic-gradient(#f99, #9f9, #99f, #f99)', overflow:"auto", scrollbarWidth: 'none', msOverflowStyle: 'none'}}>ONCE upon a time there was a prince who wanted to marry a princess; but she would have to be a real princess. He travelled all over the world to find one, but nowhere could he get what he wanted. There were princesses enough, but it was difficult to find out whether they were real ones. There was always something about them that was not as it should be. So he came home again and was sad, for he would have liked very much to have a real princess. One evening a terrible storm came on; there was thunder and lightning, and the rain poured down in torrents. Suddenly a knocking was heard at the city gate, and the old king went to open it. It was a princess standing out there in front of the gate. But, good gracious! what a sight the rain and the wind had made her look. The water ran down from her hair and clothes; it ran down into the toes of her shoes and out again at the heels. And yet she said that she was a real princess. Well, we'll soon find that out, thought the old queen. But she said nothing, went into the bed-room, took all the bedding off the bedstead, and laid a pea on the bottom; then she took twenty mattresses and laid them on the pea, and then twenty eider-down beds on top of the mattresses. On this the princess had to lie all night. In the morning she was asked how she had slept. Oh, very badly! said she. I have scarcely closed my eyes all night. Heaven only knows what was in the bed, but I was lying on something hard, so that I am black and blue all over my body. Its horrible! Now they knew that she was a real princess because she had felt the pea right through the twenty mattresses and the twenty eider-down beds. Nobody but a real princess could be as sensitive as that. So the prince took her for his wife, for now he knew that he had a real princess; and the pea was put in the museum, where it may still be seen, if no one has stolen it. There, that is a true story.</textarea>
            <br />
            <input ref={outputRef} className='text-center font-bold text-3xl bg-transparent border-8' style={{width:300, height:100, borderImageSlice: 1, borderImageSource: 'conic-gradient(#f99, #9f9, #99f, #f99)'}} disabled />
            <br />
            <input ref={sliderRef} type="range" min="1" max="1000" value={sliderValue} className="" onChange={(e) => setSliderValue(e.target.value)} style={{width:700}} />
            <div className='py-4'> wpm: <span ref={wpmDisplayRef} /> </div>
            <div>
                <button className="play-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play-filled" width={48} height={48} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth={0} fill="currentColor" />
                    </svg>
                </button>
                <button className="pause-button pl-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-pause-filled" width={48} height={48} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth={0} fill="currentColor" />
                        <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth={0} fill="currentColor" />
                    </svg>
                </button>
                <button className="restart-button pl-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-back-filled" width={48} height={48} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" strokeWidth={0} fill="currentColor" />
                        <path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" strokeWidth={0} fill="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SpeedReaderProject;