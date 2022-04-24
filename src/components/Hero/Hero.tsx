import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useAnimations } from "hooks/useAnimations";

import hero from "../../../public/hero.jpg";

import Image from "components/Image";

const Hero = () => {
    const { transition, slideAnimation, revealAnimation, heightAnimation } =
        useAnimations();

    return (
        <section data-scroll-section className={styles.hero}>
            <h1 data-scroll data-scroll-speed={2} data-scroll-position="top">
                <motion.span
                    variants={slideAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        ease: transition.ease.out,
                        duration: transition.duration,
                        delay: 0.5,
                    }}
                >
                    Romi
                </motion.span>
            </h1>
            <h1 data-scroll data-scroll-speed={1} data-scroll-position="top">
                <motion.span
                    variants={slideAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        ease: transition.ease.out,
                        duration: transition.duration,
                        delay: 0.6,
                    }}
                >
                    Garduce
                </motion.span>
            </h1>
            <motion.p
                variants={revealAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    ease: transition.ease.out,
                    duration: transition.duration,
                    delay: 0.8,
                }}
                data-scroll
                data-scroll-speed={0.5}
            >
                The first Filipino to complete the seven summits.
            </motion.p>
            <div className={styles.heroImg}>
                <Image
                    src={hero.src}
                    height={hero.height}
                    width={hero.width}
                    priority
                    scrollSpeed={-0.5}
                />
                <motion.div
                    variants={heightAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        ease: transition.ease.inOut,
                        duration: 1.5,
                        delay: 0.9,
                    }}
                    className={styles.heroImgSlider}
                ></motion.div>
            </div>
        </section>
    );
};

export default Hero;
