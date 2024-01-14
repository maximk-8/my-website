import React, {useRef} from 'react';
import useTypewriterEffect from './useTypewriterEffect';
import useHoverAnimation from './useHoverAnimation';
import { motion } from "framer-motion";
import useTextAnimation from './useTextAnimation';

const About = ({typewriterStorage}) => {
    const textRef = useRef(null);

    useTypewriterEffect([textRef], [10], "about", typewriterStorage);
    useTextAnimation([textRef]);

    const c1 = useHoverAnimation("color");

    function createSpannedText(text) {
        return text.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>);
    }

    return (  
        <div className="text-white font-mono text-2xl/9" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div ref={textRef} className="text-justify py-1-12 mx-1/7 space-y-16">
                <div className="profile-box"></div>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>About Me - Beyond the Code</motion.span></h1>
                <p className="typewriter">{createSpannedText("I'm Maxim, a UC San Diego alum and software engineer with a passion for technology. But there's more to me than just coding and computer science. Born in Belarus and having moved to the United States in my youth, I've embraced a journey of continuous learning, not just in my career but in every aspect of life.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>A Fitness Enthusiast and Culinary Explorer</motion.span></h1>
                <p className="typewriter">{createSpannedText("When I'm not delving into software development, you'll find me in the gym, pushing the limits of bodybuilding. Fitness isn't just a hobby for me; it's a lifestyle. This commitment extends to the kitchen, where I enjoy cooking up healthy, meticulously measured meals, and occasionally, indulging in creating fancy dishes. The discipline and dedication I apply to my health and fitness echo the meticulousness I bring to my professional work.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>Snowboarding and Socializing</motion.span></h1>
                <p className="typewriter">{createSpannedText("As much as I love the focus and solitude of bodybuilding and cooking, I'm equally passionate about snowboarding. Gliding down snowy slopes offers a thrilling counterbalance to my structured life. It's not just about the sport; it's about the exhilaration and the connection with nature.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>Values and Community</motion.span></h1>
                <p className="typewriter">{createSpannedText("I cherish authenticity in people — intelligence, humor, and the ability to enjoy life are traits I admire and embody. Building genuine connections with like-minded individuals, whether in the gym, on the slopes, or in the tech world, is something I value deeply.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>Goals and Dreams</motion.span></h1>
                <p className="typewriter">{createSpannedText("As I continue to advance in my career, my aspirations aren't confined to professional achievements. I aim to progress in bodybuilding, enhance my snowboarding skills, and invest more quality time with friends. My ultimate goal is to balance a fulfilling career in computer science with a life rich in experiences and happiness.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>The Essence of Maxim</motion.span></h1>
                <p className="typewriter">{createSpannedText("Friends describe me as the life of the party — always ready with a joke and a smile. This sense of humor, combined with a penchant for fun, infuses my approach to life. I'm proud of the physique I've built through years of consistency in the gym and disciplined dieting. It's a testament to my dedication and perseverance.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>Inspirations and Future Aspirations</motion.span></h1>
                <p className="typewriter">{createSpannedText("As for my entertainment tastes, I'm a fan of the magical world of Harry Potter and the intricate storytelling of Game of Thrones. While I haven't been reading as much lately, reigniting my love for books is on my horizon.")}</p>

                <h1 className="font-bold typewriter"><motion.span className="inline-block" animate={c1.controls}>In Conclusion</motion.span></h1>
                <p className="typewriter">{createSpannedText("So, that's me — Maxim, a software engineer with a multifaceted life. From coding to cooking, bodybuilding to snowboarding, I'm all about embracing challenges, pursuing passions, and enjoying the journey. Let's connect and share this exciting journey of life and technology!")}</p>
            </div>
        </div>
    );
}
 
export default About;