import SiteHeader from "../../components/layout/SiteHeader";
import HomeCountdown from "./components/HomeCountdown";
import HomeHero from "./components/HomeHero";
import HomeSponsors from "./components/HomeSponsors";
import HomeAchievements from "./components/HomeAchievements";
import HomeBrand from "./components/HomeBrand";
import HomeMapView from "./components/HomeMapView";
import HomeFooter from "./components/HomeFooter";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <SiteHeader />
            <main className="home-page__main">
                <HomeHero />
                <HomeCountdown />
                <HomeSponsors />
                <HomeAchievements />
                <HomeBrand />
                <HomeMapView />
            </main>
            <HomeFooter />
        </div>
    );
};

export default HomePage;
