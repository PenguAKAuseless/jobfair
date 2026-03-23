import { useEffect, useState } from "react";
import "./HomeCountdown.css";

const eventTargetDate = new Date("2026-03-28T07:00:00");

const HomeCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            const now = new Date();
            const milliseconds = Math.max(eventTargetDate.getTime() - now.getTime(), 0);

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
        <section id="home-countdown" className="home-countdown">
            <h2 className="home-countdown__title">Event starts in</h2>
            <div className="home-countdown__grid">
                {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.mins },
                    { label: "Seconds", value: timeLeft.secs },
                ].map((item) => (
                    <article key={item.label} className="home-countdown__item">
                        <span className="home-countdown__value">{String(item.value).padStart(2, "0")}</span>
                        <span className="home-countdown__label">{item.label}</span>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default HomeCountdown;
