import styles from "./Tips.module.scss";

const Tips = () => {
    return (
        <section data-scroll-section className={styles.tips} id="tips-sticky">
            <div>
                <h1
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#tips-sticky"
                >
                    Tips on facing hazards
                </h1>
            </div>
            <div>
                <p>
                    Since hazards are inevitable during our journey, here are
                    some tips on facing hazards from Romi himself.
                </p>
                <p>
                    He advices us to plan ahead of our trip, get basic trainings
                    on wilderness or outdoor activities that you're into, get
                    first aid training, and get sufficiently fit for your
                    planned objective. These are good advices and things to do
                    prior to your trip. These can help you reduce the likelihood
                    of falling for hazards.
                </p>
                <p>
                    It is also important to have someone know where you're going
                    so people will be aware and will know where to look for you
                    in case you get lost. He also advices mountaineers to get a
                    guide if you're unfamiliar with the place; and as much as
                    possible, avoid travelling solo or by yourself.
                </p>
                <p>
                    Moreover, keeping weather and other factors in mind will
                    help you prepare for possible events caused by natural
                    phenomenon. He also advices mountaineers to have a good
                    presence of mind. He noted that this may be difficult if one
                    is very exhausted, but very important in order to react
                    properly to a crisis. Always carry enough survival gears and
                    supplies, and have a good enough knowledge and training
                    experience on how to actually survive.
                </p>
                <p>
                    Lastly, he advices us to know our limits. While it's good to
                    push your limit every now and then, not knowing when to stop
                    is dangerous and sometimes fatal. Know your body, know your
                    limits.
                </p>
            </div>
        </section>
    );
};

export default Tips;
