import styles from "./Loader.module.scss";
import { motion } from "framer-motion";
import { useAnimations } from "hooks/useAnimations";

import { Waveform } from "@uiball/loaders";

const Loader = () => {
    const { revealAnimation } = useAnimations();

    return (
        <motion.div
            variants={revealAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.loader}
        >
            <Waveform />
        </motion.div>
    );
};

export default Loader;
