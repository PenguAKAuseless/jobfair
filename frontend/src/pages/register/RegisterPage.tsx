import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SiteHeader from "../../components/layout/SiteHeader";
import "./RegisterPage.css";

const registerTargetDate = new Date("2026-03-28T07:00:00");

const RegisterPage = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            const now = new Date();
            const milliseconds = Math.max(registerTargetDate.getTime() - now.getTime(), 0);

            setTimeLeft({
                days: Math.floor(milliseconds / (1000 * 60 * 60 * 24)),
                hours: Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
                mins: Math.floor((milliseconds / (1000 * 60)) % 60),
                secs: Math.floor((milliseconds / 1000) % 60),
            });
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="register-page">
            <SiteHeader />
            <main className="register-page__main">
                <motion.section
                    className="register-page__card"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="register-page__tag">Registration status</p>
                    <h1 className="register-page__title">Join CSE Job Fair 2026</h1>
                    <div className="register-page__joined">
                        <CheckCircle size={20} />
                        <span>20 / 100 joined</span>
                    </div>

                    <div className="register-page__countdown-grid">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Mins", value: timeLeft.mins },
                            { label: "Secs", value: timeLeft.secs },
                        ].map((item) => (
                            <article key={item.label} className="register-page__countdown-item">
                                <span className="register-page__countdown-value">{String(item.value).padStart(2, "0")}</span>
                                <span className="register-page__countdown-label">{item.label}</span>
                            </article>
                        ))}
                    </div>

                    <div className="register-page__actions">
                        <button type="button" className="register-page__action register-page__action--primary">Register Event</button>
                        <button type="button" className="register-page__action register-page__action--secondary">Register CV Clinic</button>
                    </div>

                    <Link to="/" className="register-page__back-link">Back to Home</Link>
                </motion.section>
            </main>
        </div>
    );
};

export default RegisterPage;
