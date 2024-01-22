import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom";
import img1 from "./_upscaled_image.png";
import img2 from "./_text_summarizer.png";
import img3 from "./_graph_api.png";
import img4 from "./_huffman_coding.png";
import img5 from "./_coin_box.png";
import img6 from "./_speed_reader.png";
import img7 from "./profile.jpeg";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 2 }
    }
};

// TODO: Blur out on page exit
const SvgComponent = ({children, width = "14vw", height = "14vh", color, scale = 1}) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke={color} 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ 
            transform: `scale(${scale})`,
            marginLeft: `calc((100vw - ${width} * 16) / (2 * 16))`,
            marginRight: `calc((100vw - ${width} * 16) / (2 * 16))`,
        }}
    >
    {children}
    </motion.svg>
);

const LandingPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    useEffect(() => {
        if (isHovered) {
            controls.start({
                pathLength: 1, 
                fillOpacity: [1, 0],
                fill: "#121826",
                transition: { duration: 0.5 }
            });

            controls2.start({
                fill: "#61A6CA",
                letterSpacing: "4px",
                transition: { duration: 0.5 }
            });
        } else {
            controls.start({
                pathLength: 0,
                fillOpacity: [0, 1],
                fill: "#1D263E",
                transition: { duration: 0.5 }
            });

            controls2.start({
                fill: "#121826",
                letterSpacing: "2px",
                transition: { duration: 0.5 }
            });
        }
    }, [isHovered, controls, controls2]);

    useEffect(() => {
        controls.start({
            pathLength: 0,
            fillOpacity: [0, 1],
            fill: "#1D263E",
            transition: { duration: 3, delay: 2 }
        });

        controls2.start({
            fill: "#121826",
            fillOpacity: [0, 1],
            letterSpacing: "2px",
            transition: { duration: 3, delay: 4 }
        });
    }, []);

    useEffect(() => {
        const images = [img1, img2, img3, img4, img5, img6, img7];
        const links = [];
    
        images.forEach(image => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = image;
          document.head.appendChild(link);
          links.push(link);
        });
    
        return () => {
          links.forEach(link => {
            document.head.removeChild(link);
          });
        };
    }, []);

    const options = useMemo(() => {
        return {
            background: {
                color: "transparent", 
            },
            fullScreen: {
                enable: true, 
                zIndex: 0, 
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true, 
                        mode: "push", 
                    },
                    onHover: {
                        enable: true, 
                        mode: "repulse", 
                    },
                },
                modes: {
                    push: {
                        quantity: 5, 
                    },
                    repulse: {
                        distance: 150, 
                    },
                },
            },
            particles: {
                color: {
                    value: ["#933E85", "#4C61A5"]
                },
                links: {
                    enable: true,
                    distance: 200,
                    opacity: 0.3,
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 5 },
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                },
                size: {
                    value: { min: 3, max: 5 },
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 20
                },
            },
        };
    }, []);      

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
      }, []);

    return (
        <div className='flex flex-col justify-center min-h-screen bg-gray-900'>
            <Particles
                init={particlesInit}
                options={options}
            />
            <div className='flex items-end justify-center w-screen'>
                <div className='transform translate-y-3'>
                    <SvgComponent width='21vw' height='21vh' color="#4B72B0">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M17 4l0 16"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 12l10 0"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 4l0 16"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div>
                    <SvgComponent color="#4C61A5">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M12 8l0 12"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.circle
                            cx="12" cy="4.3" r="0.3"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div className='-mx-6'>
                    <SvgComponent  color="transparent"></SvgComponent>
                </div>

                <div className='transform translate-y-3'>
                    <SvgComponent width='21vw' height='21vh' color="#4E59A7">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M6 4l12 0"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M12 4l0 16"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div>
                    <SvgComponent color="#4D4C95">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M17 4l0 16"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 12l10 0"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 4l0 16"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div>
                    <SvgComponent color="#584993">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M17 4h-10v16h10"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 12l8 0"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div>
                    <SvgComponent color="#704A93">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M12 13l5 7"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div>
                    <SvgComponent color="#8E438F">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M17 4h-10v16h10"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M7 12l8 0"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>

                <div className='transform translate-y-7'>
                    <SvgComponent width='21vw' height='21vh' color="#933E85">
                        <motion.path
                            stroke="none" d="M0 0h24v24H0z" fill="none"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M12 19v.01"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M12 15v-10"
                            variants={draw}
                            initial="hidden"
                            animate="visible"
                        />
                    </SvgComponent>
                </div>
            </div>
            <div className='flex justify-center w-screen transform translate-y-14'>
                <motion.div
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                >
                    <svg width="230" height="90">
                    <motion.rect
                        x="15"
                        y="15"
                        width="200"
                        height="60"
                        fillOpacity="0"
                        strokeWidth="7"
                        stroke="#6A4B8F"
                        rx="7"
                        ry="7"
                        animate={controls}
                    />
                    <motion.text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy=".3em"
                        fill={isHovered ? "#61A6CA" : "#121826"}
                        fontSize="20"
                        fontWeight="900"
                        fontFamily="'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace"
                        animate={controls2}
                    >
                        Enter Site
                    </motion.text>
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;