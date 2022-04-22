import styles from "./Preparation.module.scss";

const Preparation = () => {
    return (
        <section
            data-scroll-section
            className={styles.preparation}
            id="preparation-sticky"
        >
            <div>
                <h1
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#preparation-sticky"
                >
                    Preparing to climb
                </h1>
            </div>
            <div>
                <p>
                    One thing to know is that climbing a mountain is actually
                    very expensive. He said that climbing Everest alone will not
                    be possible without any sponsors. Therefore, we should be
                    financially prepared when attempting to climb a mountain.
                </p>
                <p>
                    Moreover, he also stated that fitness and health are very
                    important factors when attempting to climb a mountain. High
                    altitude mountain climbing is a very difficult sport and a
                    very demanding activity.
                </p>
                <p>
                    Weather prediction, understanding nature and glaciers are
                    more important factors as well.
                </p>
                <p>
                    Finally, he advices mountaineers to start with a
                    mountaineering organization. One you joined one and
                    experienced tropical climbing, you can proceed to alpine for
                    you to have basic skills on winter survival or winter
                    climbing.
                </p>
            </div>
        </section>
    );
};

export default Preparation;
