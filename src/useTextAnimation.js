import { useEffect } from "react";

const useTextAnimation = (refs) => { 
    useEffect(() => {
        const animations = ['color-change11', 'color-change12', 'color-change13', 'color-change14'];
        let animationIndex = 0;
        refs.forEach((ref) => {
            const textElements = Array.from(ref.current.querySelectorAll('.animated'));

            textElements.forEach((el) => {
                el.style.animationName = animations[animationIndex];
                animationIndex = (animationIndex + 1) % animations.length;
            });
        });
    }, [refs]);
}

export default useTextAnimation;