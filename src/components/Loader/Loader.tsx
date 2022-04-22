import styles from "./Loader.module.scss";
import { motion } from "framer-motion";
import { useAnimations } from "hooks/useAnimations";

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
            <h1>Loading...</h1>
        </motion.div>
    );
};

export default Loader;
