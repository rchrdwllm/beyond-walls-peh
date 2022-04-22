import styles from "./HazardsFaced.module.scss";

const HazardsFaced = () => {
    return (
        <section
            data-scroll-section
            className={styles.hazardsFaced}
            id="hazards-faced-sticky"
        >
            <div>
                <h1
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#hazards-faced-sticky"
                >
                    Hazards he faced
                </h1>
            </div>
            <div>
                <p>
                    Just like other mountaineers, Romi himself also experienced
                    problems and dangerous situations during his mountain
                    climbs.
                </p>
                <p>
                    According to him, some problems he encountered were being
                    untrained and lacking of equipment. Fortunately, he managed
                    to survive despite having those hazards.
                </p>
                <p>
                    Furthermore, weather is a hazard for mountaineering, which
                    is why we must be aware of current weather conditions. You
                    won't be able to do anything if a storm hits, no matter how
                    powerful or prepared you are.
                </p>
                <p>
                    Anxiety was also a problem. That is why taking away anxiety
                    is a part of his discipline. Mountain climbing is very
                    risky, you can have anxiety attacks anytime just by thinking
                    of how dangerous it is. But for Romi, he's already past that
                    thought.
                </p>
            </div>
        </section>
    );
};

export default HazardsFaced;
