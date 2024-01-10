import { useAnimation } from 'framer-motion';
import { useEffect, useMemo } from 'react';

const useHoverAnimation = (elementType) => {
    const controls = useAnimation();

    const animation1 = useMemo(() => ({
        [elementType]: ["#FFD700", "#00f900", "#f90053", "#1effa9", "#FFD700"],
        scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
        rotate: [0, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 0],
        transition: {
            [elementType]: { duration: 5, repeat: Infinity },
            scale: { duration: 1.7, repeat: Infinity, repeatDelay: 5 },
            rotate: { duration: 1.7, repeat: Infinity, repeatDelay: 5 }
        }
    }), [elementType]);
    
    const animation2 = { 
        scale: 1.2,
        rotate: 0,
        [elementType]: "#ffffff",
        transition: { duration: 0.5 }
    };

    const handleMouseEnter = () => {
        controls.start(animation2);
    };

    const handleMouseLeave = () => {
        controls.start(animation1);
    };

    useEffect(() => {
        controls.start(animation1);
    }, [controls, animation1]);

    return { controls, handleMouseEnter, handleMouseLeave };
}

export default useHoverAnimation;