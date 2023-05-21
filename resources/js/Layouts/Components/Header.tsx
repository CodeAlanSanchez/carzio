import { PageProps } from "@/types/global";

export const Header = ({ auth }: PageProps) => {
    return (
        <header className="header">
            <nav>
                <div className="header-container">
                    <ul className="header-row">
                        <li className="header-item">
                            <a href="#hero">
                                Home
                            </a>
                        </li>
                        <li className="header-item">
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li className="header-item">
                            <a href="#services">
                                Services
                            </a>
                        </li>
                        <li className="header-item">
                            <a href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-blind btn-test">
                        REQUEST A QUOTE
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
