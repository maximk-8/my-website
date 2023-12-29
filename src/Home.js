import image1 from "./upscaled_image.png";

const Home = () => {
    return ( 
        <div>
            <div className="bg-black bg-cover relative text-white font-mono text-base/7 text-lg">
                <div style={{
                    backgroundImage: `url(${image1}), linear-gradient(to bottom, black 15%, #3E75B6 45%, #584993 65%, #9F3578)`, 
                    backgroundSize: '80%, 100%, 100%', 
                    backgroundRepeat: 'no-repeat, no-repeat', 
                    backgroundPosition: 'top right, top',
                    minHeight: '100vh' }}>

                    <div className="pt-48 pl-16">
                        <p className="w-2/5">My name is Maxim. I graduated from UC San Diego in March 2023 with a Bachelor of 
                            Science in Computer Science. With a strong academic record, I blend a rigorous 
                            educational background with hands-on experience in software engineering. Embarking 
                            on a comprehensive exploration of computer science, my journey has equipped me with 
                            a deep understanding of complex problem-solving, intelligent system design, and the 
                            assurance of technological robustness. This experience has granted me a profound 
                            insight into the interplay between theoretical foundations and their practical 
                            applications in the tech landscape.</p>
                        <p className="pt-8 w-1/3">During my internship at General Atomics, I engaged deeply with flight-critical software, 
                            sharpening my analytical skills and playing a pivotal role in enhancing system safety 
                            and performance. My proactive approach to problem-solving and meticulous attention to 
                            code quality were instrumental in accelerating software delivery and strengthening system 
                            robustness.</p>
                        <p className="pt-8 w-1/3">Since graduating from UC San Diego, I have immersed myself in a variety of projects that 
                            have broadened my technical expertise and provided extensive hands-on experience. This 
                            continuous journey of learning and application has not only solidified my proficiency in 
                            a range of technologies but also honed my ability to craft dynamic solutions that meet 
                            complex challenges. My commitment to technology extends beyond academic knowledge, embracing 
                            the practical intricacies of software development and the innovative spirit of the industry.</p>
                        <p className="pt-8 w-1/3">As a technology enthusiast and proactive problem solver, I am proficient in a variety of 
                            programming languages and tools. With a readiness to embrace challenges and a drive to 
                            extend the limits of what's possible in software development, I am eager to collaborate 
                            and innovate.</p>
                    </div>
                    <div className="pt-24 pl-16">
                        <h2>Skills</h2>
                        <p>Java, C, C++, JavaScript, Python, Scikit-learn, PyTorch, TensorFlow, HTML/CSS, React, Node.js, PostgreSQL</p>
                    </div>
                </div>                
            </div>
        </div>
    );
}
 
export default Home;


/*
<div
                className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent, black)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
                }}
            ></div>*/

/*
<div className="flex flex-row justify-between items-start w-full">
                <div className="flex-1">
                    <p>My name is Maxim. I graduated from UC San Diego in March 2023 with a Bachelor of 
                        Science in Computer Science. With a strong academic record, I blend a rigorous 
                        educational background with hands-on experience in software engineering. Embarking 
                        on a comprehensive exploration of computer science, my journey has equipped me with 
                        a deep understanding of complex problem-solving, intelligent system design, and the 
                        assurance of technological robustness. This experience has granted me a profound 
                        insight into the interplay between theoretical foundations and their practical 
                        applications in the tech landscape.</p>
                    <p>During my internship at General Atomics, I engaged deeply with flight-critical software, 
                        sharpening my analytical skills and playing a pivotal role in enhancing system safety 
                        and performance. My proactive approach to problem-solving and meticulous attention to 
                        code quality were instrumental in accelerating software delivery and strengthening system 
                        robustness.</p>
                    <p>Since graduating from UC San Diego, I have immersed myself in a variety of projects that 
                        have broadened my technical expertise and provided extensive hands-on experience. This 
                        continuous journey of learning and application has not only solidified my proficiency in 
                        a range of technologies but also honed my ability to craft dynamic solutions that meet 
                        complex challenges. My commitment to technology extends beyond academic knowledge, embracing 
                        the practical intricacies of software development and the innovative spirit of the industry.</p>
                    <p>As a technology enthusiast and proactive problem solver, I am proficient in a variety of 
                        programming languages and tools. With a readiness to embrace challenges and a drive to 
                        extend the limits of what's possible in software development, I am eager to collaborate 
                        and innovate.</p>
                </div>
                <div className="w-9/10">
                    <img src={image1} alt="" className="full h-auto" />
                </div>
            </div>
            */