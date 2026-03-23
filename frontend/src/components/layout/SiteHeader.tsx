import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./SiteHeader.css";

const homeAnchors = [
    { label: "Home", href: "#home-overview" },
    { label: "Countdown", href: "#home-countdown" },
    { label: "Sponsors", href: "#home-sponsors" },
    { label: "Achievements", href: "#home-achievements" },
    { label: "Brand", href: "#home-brand" },
    { label: "Map", href: "#home-map" },
    { label: "Contact", href: "#home-contact" },
];

const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link to="/" className="site-header__brand" aria-label="Go to Home page">
                    <img src="/images/common/cse-logo.png" alt="CSE Job Fair logo" className="site-header__logo" />
                    <span className="site-header__title">CSE Job Fair 2026</span>
                </Link>

                {isHomePage && (
                    <nav className="site-header__nav" aria-label="Home sections">
                        {homeAnchors.map((anchor) => (
                            <a key={anchor.href} href={anchor.href} className="site-header__anchor">
                                {anchor.label}
                            </a>
                        ))}
                    </nav>
                )}

                <div className="site-header__actions">
                    <Link to="/register" className="site-header__register-link">
                        Register
                    </Link>
                    <button
                        type="button"
                        className="site-header__menu-button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="site-header__mobile-panel">
                    {isHomePage &&
                        homeAnchors.map((anchor) => (
                            <a
                                key={anchor.href}
                                href={anchor.href}
                                className="site-header__mobile-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {anchor.label}
                            </a>
                        ))}
                    <Link to="/register" className="site-header__mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Register
                    </Link>
                </div>
            )}
        </header>
    );
};

export default SiteHeader;
