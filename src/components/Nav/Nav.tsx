import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import { useAnimations } from "hooks/useAnimations";

import Link from "components/Link";

const Nav = () => {
    const { revealAnimation } = useAnimations();

    return (
        <motion.nav
            data-scroll-section
            variants={revealAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.nav}
        >
            <Link href="https://github.com/rchrdwllm/beyond-walls-peh">
                Coded with &#128153; by Richard William
            </Link>
            <Link href="http://romigarduce.blogspot.com/">
                See Romi's Official Blog
            </Link>
        </motion.nav>
    );
};

export default Nav;
