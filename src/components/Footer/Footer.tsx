import styles from "./Footer.module.scss";

import Link from "components/Link";

const Footer = () => {
    return (
        <footer data-scroll-section className={styles.footer}>
            <div data-scroll data-scroll-speed={-3}>
                <div className={styles.footerContent}>
                    <h1>
                        Romi <br /> Garduce
                    </h1>
                    <h3>
                        “To climb is human; <br /> to summit- divine.”
                    </h3>
                </div>
                <div className={styles.sources}>
                    <p>Sources</p>
                    <Link lowercase href="http://romigarduce.blogspot.com/">
                        http://romigarduce.blogspot.com/
                    </Link>
                    <Link
                        lowercase
                        href="https://sports.inquirer.net/29469/final-epic-climb-awaits-resolute-romi-garduce"
                    >
                        https://sports.inquirer.net/29469/final-epic-climb-awaits-resolute-romi-garduce
                    </Link>
                    <Link
                        lowercase
                        href="https://www.youtube.com/watch?v=tW5qS5r_jpY"
                    >
                        https://www.youtube.com/watch?v=tW5qS5r_jpY
                    </Link>
                    <Link
                        lowercase
                        href="https://romigarduce.blogspot.com/2016/05/"
                    >
                        https://romigarduce.blogspot.com/2016/05/
                    </Link>
                    <Link
                        href="https://github.com/rchrdwllm/beyond-walls-peh"
                        style={{
                            marginTop: "1rem",
                        }}
                    >
                        See website source code
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
