import "./HomeAchievements.css";

const achievements = [
    {
        title: "300+ partner companies",
        description: "A long-term employer network built with each event edition.",
    },
    {
        title: "30+ booths each season",
        description: "Students can directly engage with many industry teams in one day.",
    },
    {
        title: "2000+ participants",
        description: "Large student turnout across software, AI, data, and hardware tracks.",
    },
    {
        title: "2000+ job opportunities",
        description: "Internship and full-time roles introduced through event partners.",
    },
];

const HomeAchievements = () => {
    return (
        <section id="home-achievements" className="home-achievements">
            <h2 className="home-achievements__title">20-year journey</h2>
            <div className="home-achievements__layout">
                <article className="home-achievements__story">
                    <p>
                        For two decades, CSE Job Fair has connected students with real hiring pipelines and professional mentors.
                        Each season continues the same goal: practical opportunities and stronger career readiness.
                    </p>
                    <a href="#home-sponsors" className="home-achievements__story-link">See partner network</a>
                </article>
                <div className="home-achievements__grid">
                    {achievements.map((achievement) => (
                        <article key={achievement.title} className="home-achievements__item">
                            <h3 className="home-achievements__item-title">{achievement.title}</h3>
                            <p className="home-achievements__item-text">{achievement.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeAchievements;
