import { useEffect } from 'react';

const useTypewriterEffect = (refs, speed, ssVar) => {
    useEffect(() => {
        const handleBeforeUnload = () => sessionStorage.removeItem(`${ssVar}`);
        window.addEventListener('beforeunload', handleBeforeUnload);

        if(!sessionStorage.getItem(`${ssVar}`)) {
            refs.forEach((ref) => {
                const textElements = Array.from(ref.current.querySelectorAll('.typewriter'));
                let delay = 0;

                textElements.forEach((el) => {
                    const wordSpans = Array.from(el.getElementsByTagName('span'));

                    wordSpans.forEach((wordSpan) => {
                        const word = wordSpan.textContent;
                        wordSpan.textContent = ' ';

                        Array.from(word).forEach((char) => {
                            const charSpan = document.createElement('span');
                            charSpan.textContent = char;
                            charSpan.style.visibility = 'hidden';
                            charSpan.className = 'new-span';
                            wordSpan.appendChild(charSpan);

                            const cursorSpan = document.createElement('span');
                            cursorSpan.textContent = '';
                            cursorSpan.className = 'cursor';
                            wordSpan.appendChild(cursorSpan);
                        });

                        el.appendChild(wordSpan);
                    });

                    const charSpans = el.getElementsByClassName('new-span');
                    const cursorSpans = el.getElementsByClassName('cursor');
                    for (let i = 0; i < charSpans.length; i++) {
                        setTimeout(() => {
                            charSpans[i].style.visibility = 'visible';
                            if (i > 0 && cursorSpans[i - 1]) {
                                cursorSpans[i - 1].textContent = '';
                            }
                            if (cursorSpans[i]) {
                                cursorSpans[i].textContent = '|';
                            }
                        }, delay);
                        delay += speed;
                    }

                    setTimeout(() => {
                        if (cursorSpans.length > 0) {
                        cursorSpans[cursorSpans.length - 1].textContent = '';
                        }
                    }, delay + 1000);
                });
            });
        }

        sessionStorage.setItem(`${ssVar}`, true);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [refs, speed, ssVar]);
}

export default useTypewriterEffect;