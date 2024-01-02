import { useEffect } from 'react';

const useTypewriterEffect = (refs) => {
    useEffect(() => {
        const handleBeforeUnload = () => sessionStorage.removeItem('hasRun');
        window.addEventListener('beforeunload', handleBeforeUnload);

        if(!sessionStorage.getItem('hasRun')) {
            refs.forEach((ref) => {
            const textElements = Array.from(ref.current.querySelectorAll('.typewriter'));
            let delay = 0;

            textElements.forEach((el) => {
                const words = el.textContent.split(' ');
                el.textContent = '';

                words.forEach((word) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.textContent = ' ';

                    Array.from(word).forEach((char) => {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = char;
                        charSpan.style.visibility = 'hidden';
                        wordSpan.appendChild(charSpan);
                    });

                    el.appendChild(wordSpan);
                });

                const animations = ['color-change11', 'color-change12', 'color-change13', 'color-change14'];
                let animationIndex = 0;

                Array.from(el.querySelectorAll('span > span')).forEach((charSpan, index, array) => {
                    setTimeout(() => {
                        charSpan.style.visibility = 'visible';
    
                        // If it's the last character span, replace all character spans with their text content
                        if (index === array.length - 1) {
                            Array.from(el.querySelectorAll('span > span')).forEach((charSpan) => {
                                const parentNode = charSpan.parentNode;
                                const text = document.createTextNode(charSpan.textContent);
                                charSpan.parentNode.replaceChild(text, charSpan);

                                parentNode.style.animationName = animations[animationIndex];
                                animationIndex = (animationIndex + 1) % animations.length;
                            });
                        }
                    }, delay);
                    delay += 10;
                });
            });
        });
        
        }

        sessionStorage.setItem('hasRun', true);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [refs]);
}

export default useTypewriterEffect;