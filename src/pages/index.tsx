import Hero from "components/Hero";
import About from "components/About";
import Tips from "components/Tips";
import Preparation from "components/Preparation";
import HazardsFaced from "components/HazardsFaced";
import Footer from "components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Tips />
            <Preparation />
            <HazardsFaced />
            <Footer />
        </>
    );
};

export default Home;
