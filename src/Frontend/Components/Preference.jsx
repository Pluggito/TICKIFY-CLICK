import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Preference() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Pre-create all transforms
    const transform1 = useTransform(scrollYProgress, [0, 0.3], ["101%", "-101%"]);
    const transform2 = useTransform(scrollYProgress, [0.2, 0.5], ["101%", "-101%"]);
    const transform3 = useTransform(scrollYProgress, [0.4, 0.7], ["101%", "-101%"]);
    const transform4 = useTransform(scrollYProgress, [0.6, 0.9], ["101%", "-101%"]);

    const lineProgresses = [transform1, transform2, transform3, transform4];

    const text = `We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we've got your back.`;
    const lines = text.split('. ');

    return (
        <section 
            id="Section" 
            ref={containerRef} 
            className="min-h-screen flex items-center justify-center p-8 bg-black"
        >
            <div className="py-20 px-2 relative text-center flex flex-col m-8 gap-2">
                {lines.map((line, index) => (
                    <motion.p 
                        key={index}
                        style={{
                            backgroundPosition: lineProgresses[index]
                        }}
                        transition={{
                            delay: index * 0.3,
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        className="text-[42px] font-[Space Grotesk] font-bold m-0 tracking-wide
                            text-[rgba(128,128,128,0.15)] bg-[linear-gradient(to_right,rgb(255,255,255)_50%,rgba(128,128,128,0.15)_50%)]
                            bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-100 ease
                            w-[850px]"
                    >
                        {line}{index !== lines.length - 1 ? '.' : ''}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}