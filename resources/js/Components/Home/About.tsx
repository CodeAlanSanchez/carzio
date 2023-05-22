export const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h1 className="about-heading">
                    ABOUT US
                </h1>
                <p className="about-text">
                    We are Carzio. We specialize in all things cars, based in the greater Chicago area. For more than 15
                    years we have been providing the best service possible and made lots of loyal costumers.
                </p>
                <p className="about-text">
                    Give your car the shine it needs. We can wrap
                    your car, tint your windows, replace your spark plugs, change your oil, and even do paint
                    correction.
                </p>
                <p className="about-text">
                    Get in contact with us ( +1 (262) 279-7914 or support@carzio.com) and we can give you an estimate on
                    all
                    your needs.
                </p>
                <hr className="section-separator"/>
                <div className="about-gallery">
                    <img src="img/red.jpg" alt="Red headlight of car"/>
                    <img src="img/orange.jpg" alt="Orange fender of car"/>
                    <img src="img/green.jpg" alt="Green headlight shot of car"/>
                </div>
            </div>
        </section>
    )
}

export default About;

