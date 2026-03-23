import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./HomeHero.css";

const heroBackgrounds = [
    "/images/hero/hero-10.jpg",
    "/images/hero/hero-09.jpg",
    "/images/hero/hero-08.jpg",
    "/images/hero/hero-07.jpg",
];

const HomeHero = () => {
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setHeroIndex((current) => (current + 1) % heroBackgrounds.length);
        }, 3800);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section id="home-overview" className="home-hero">
            <AnimatePresence mode="wait">
                <motion.img
                    key={heroBackgrounds[heroIndex]}
                    src={heroBackgrounds[heroIndex]}
                    alt=""
                    aria-hidden="true"
                    className="home-hero__background-image"
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -36 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            </AnimatePresence>
            <div className="home-hero__overlay" />
            <div className="home-hero__shape home-hero__shape--left" aria-hidden="true" />
            <div className="home-hero__shape home-hero__shape--right" aria-hidden="true" />
            <motion.div
                className="home-hero__content"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="home-hero__tag">CSE JOB FAIR 2026</p>
                <h1 className="home-hero__title">Your bridge from university to industry</h1>
                <p className="home-hero__description">
                    Meet leading companies, build your network, and discover career tracks prepared for CSE students.
                </p>
                <a href="#home-countdown" className="home-hero__scroll-link">Scroll to countdown</a>
            </motion.div>
        </section>
    );
};

export default HomeHero;
