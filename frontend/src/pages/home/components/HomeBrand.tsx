import "./HomeBrand.css";

const brandImages = {
    leftTall: "/images/brand/brand-01.jpg",
    topLeft: "/images/brand/brand-02.jpg",
    topRight: "/images/brand/brand-03.jpg",
    middleLeft: "/images/brand/brand-04.jpg",
    middleRight: "/images/brand/brand-05.jpg",
    bottomRight: "/images/brand/brand-06.jpg",
};

const HomeBrand = () => {
    return (
        <section id="home-brand" className="home-brand">
            <h2 className="home-brand__title">Brand moments</h2>
            <p className="home-brand__description">
                Event identity, campus visuals, and sponsor highlights from past and current editions.
            </p>
            <div className="home-brand__mosaic">
                <figure className="home-brand__slot home-brand__slot--left-tall">
                    <img src={brandImages.leftTall} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
                <figure className="home-brand__slot home-brand__slot--top-left">
                    <img src={brandImages.topLeft} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
                <figure className="home-brand__slot home-brand__slot--top-right">
                    <img src={brandImages.topRight} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
                <figure className="home-brand__slot home-brand__slot--middle-left">
                    <img src={brandImages.middleLeft} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
                <figure className="home-brand__slot home-brand__slot--middle-right">
                    <img src={brandImages.middleRight} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
                <figure className="home-brand__slot home-brand__slot--bottom-right">
                    <img src={brandImages.bottomRight} alt="Brand visual" className="home-brand__image" loading="lazy" />
                </figure>
            </div>
        </section>
    );
};

export default HomeBrand;
