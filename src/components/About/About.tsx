import styles from "./About.module.scss";

const About = () => {
    return (
        <section data-scroll-section className={styles.about}>
            <p data-scroll data-scroll-speed={2}>
                Romeo Roberto "Romi" Garduce, or simply “Garduch”, is a Filipino
                mountain climber, scuba diving master, environmentalist, writer,
                motivational speaker, and IT expert. As a member of the UP
                Mountaineers, he began climbing mountains for a good cause in
                1991.
            </p>
            <p data-scroll data-scroll-speed={1}>
                He is one of the most accomplished and well-known Filipino
                Alpine and High Altitude mountaineers, having climbed in a
                variety of nations across all seven continents. He has paddled
                lakes and open seas, scuba dived shipwrecks and shark-infested
                atolls, skied icy mountains, and journeyed to the farthest
                reaches of all continents as an adventurer. He's seen the
                Egyptian and Peruvian deserts, walked through African savannah,
                cut a track through Southeast Asia's rainforests, and climbed
                and survived the world's most punishing summits in the Himalaya,
                Andes, Caucasus, Ellsworth, and Alaska mountain ranges.
            </p>
        </section>
    );
};

export default About;
