import { motion } from "framer-motion";
import "./HomeSponsors.css";

const sponsorGroups = [
    {
        title: "Diamond",
        logos: [
            "/images/sponsors/sponsor-vng.png",
            "/images/sponsors/sponsor-kms.png",
            "/images/sponsors/sponsor-nvidia.png",
        ],
    },
    {
        title: "Gold",
        logos: [
            "/images/sponsors/sponsor-fpt-software.png",
            "/images/sponsors/sponsor-sacombank.png",
            "/images/sponsors/sponsor-verisilicon.png",
            "/images/sponsors/sponsor-isb.png",
            "/images/sponsors/sponsor-nexon.png",
            "/images/sponsors/sponsor-fujinet.png",
            "/images/sponsors/sponsor-gameloft.png",
            "/images/sponsors/sponsor-bv.png",
        ],
    },
];

const HomeSponsors = () => {
    return (
        <section id="home-sponsors" className="home-sponsors">
            <motion.article
                className="home-sponsors__welcome"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div>
                    <p className="home-sponsors__welcome-tag">Welcome</p>
                    <h3 className="home-sponsors__welcome-title">Chao mung ban den voi CSE Job Fair 2026</h3>
                    <p className="home-sponsors__welcome-text">
                        Ket noi voi cac cong ty hang dau va kham pha co hoi nghe nghiep tai su kien viec lam lon nhat khoa CSE.
                    </p>
                </div>
                <img src="/images/common/cse-jobfair-mark.png" alt="CSE x Job Fair mark" className="home-sponsors__welcome-image" />
            </motion.article>

            <div className="home-sponsors__intro">
                <h2 className="home-sponsors__title">Sponsors of 2026</h2>
                <p className="home-sponsors__description">
                    The event is powered by partners who support learning, hiring, and practical growth for CSE students.
                </p>
            </div>

            {sponsorGroups.map((group) => (
                <motion.div
                    key={group.title}
                    className="home-sponsors__group"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="home-sponsors__group-title">{group.title}</h3>
                    <div className="home-sponsors__logo-grid">
                        {group.logos.map((logo) => (
                            <img key={logo} src={logo} alt="Sponsor logo" className="home-sponsors__logo" loading="lazy" />
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default HomeSponsors;
