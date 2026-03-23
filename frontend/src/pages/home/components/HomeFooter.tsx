import { Facebook, Mail, MapPin } from "lucide-react";
import "./HomeFooter.css";

const HomeFooter = () => {
    return (
        <footer id="home-contact" className="home-footer">
            <div className="home-footer__inner">
                <div className="home-footer__brand">
                    <div className="home-footer__brand-row">
                        <img src="/images/common/cse-logo.png" alt="CSE logo" className="home-footer__logo" />
                        <div>
                            <h3 className="home-footer__title">CSE Job Fair 2026</h3>
                            <p className="home-footer__subtitle">Faculty of Computer Science and Engineering</p>
                        </div>
                    </div>
                    <p className="home-footer__text">The annual bridge between CSE students and industry hiring teams.</p>
                </div>

                <nav className="home-footer__links" aria-label="Footer quick links">
                    <a href="#home-overview">Home</a>
                    <a href="#home-sponsors">Sponsors</a>
                    <a href="#home-achievements">Achievements</a>
                    <a href="#home-brand">Brand</a>
                    <a href="#home-map">Map</a>
                </nav>

                <div className="home-footer__contact-list">
                    <p className="home-footer__text">
                        <MapPin size={15} />
                        <span>Ho Chi Minh City, Vietnam</span>
                    </p>
                    <p className="home-footer__text">
                        <Mail size={15} />
                        <span>dtn-ktmt@hcmut.edu.vn</span>
                    </p>
                    <p className="home-footer__text">
                        <Facebook size={15} />
                        <span>CSE Multimedia</span>
                    </p>
                </div>
            </div>
            <p className="home-footer__copyright">© 2026 CSE Job Fair. All rights reserved.</p>
        </footer>
    );
};

export default HomeFooter;
