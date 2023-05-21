export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-contact">
                    <h2 className="footer-heading">
                        ADDRESS
                    </h2>
                    <address className="footer-address">
                        14 Stage Rd
                        <br/>
                        Genoa City, Wisconsin, US
                        <br/>
                        5623
                    </address>
                </div>
                <div className="footer-hours">
                    <h2 className="footer-heading">HOURS</h2>
                    <ul>
                        <li className="footer-day">
                            MONDAY - FRIDAY
                        </li>
                        <li className="footer-hour">
                            7AM-5PM
                        </li>
                        <li className="footer-day">
                            SATURDAY
                        </li>
                        <li className="footer-hour">
                            9AM-3PM
                        </li>
                        <li className="footer-day">
                            SUNDAY
                        </li>
                        <li className="footer-hour">
                            CLOSED
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="footer-heading">PHONE</h2>
                    <a className="footer-phone" href="tel:2622797914">+1 (262) 279-7914</a>
                    <p>If you have any questions, <br/>feel free to contact us</p>
                    <br/>
                    <a href="mailto:noreply@alansanchez.dev" className="footer-email">support@carzio.com</a>
                </div>
                <div className="footer-legal">
                    <h2 className="footer-heading">LEGAL</h2>
                    <div>TERMS OF SERVICE</div>
                    <div>PRIVACY POLICY</div>
                </div>
            </div>
            <hr/>
            <div className="footer-copyright">
                ALAN SANCHEZ - www.alansanchez.dev © 2022. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;
