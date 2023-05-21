export const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-content">
                <div className="services-one">
                    <div className="professional">
                        <h1 className="services-header">PROFESSIONAL</h1>
                        <ul className="services-text">
                            <li>CLEANING</li>
                            <li>DETAILING</li>
                            <li>OIL CHANGES</li>
                            <li>PAINT CORRECTION</li>
                            <li>TINTING</li>
                            <li>WRAPPING</li>
                            <li>REPAIRS</li>
                        </ul>
                    </div>
                    <div className="services-gallery">
                        <img
                            src="img/detailing-1.jpg"
                            alt="Car tire being cleaned with rag"
                            className="l"
                        />
                        <img
                            src="img/oil.jpg"
                            alt="Car tire being cleaned with rag"
                            className="tr"
                        />
                        <img
                            src="img/tire.jpg"
                            alt="Car tire being cleaned with rag"
                            className="br"
                        />
                    </div>
                </div>
                <div className="services-two">
                    <button className="btn btn-blind btn-lg btn-primary">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services;
