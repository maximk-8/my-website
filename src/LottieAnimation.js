import Lottie from 'react-lottie';
import downArrowData from './downArrow.json';
import React from 'react';

const LottieAnimation = () => {
    const downArrowAnimationOptions = {
        loop: true,
        autoplay: true,
        animationData: downArrowData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex justify-center relative -mt-8">
            <Lottie options={downArrowAnimationOptions} height={300} width={300} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
        </div>
    );
}

export default LottieAnimation;