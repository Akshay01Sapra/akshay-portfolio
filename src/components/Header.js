import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-scroll";
import LogoImg from "../assets/images/akshay-logo.svg"
import "../assets/styles/header.scss";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [openMenu]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                openMenu &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [openMenu]);

    return (
        <header className={`mainheader ${isSticky ? "sticky-header" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-wrapper">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={LogoImg} className="logo-img" alt="logo" />
                    </a>

                    <button
                        ref={buttonRef}
                        type="button"
                        className={`navbar-toggler ${openMenu ? "open" : ""}`}
                        onClick={() => setOpenMenu(!openMenu)}
                        aria-expanded={openMenu}
                        aria-label="Toggle navigation"
                    >
                        <div className="toggler-icon1"></div>
                        <div className="toggler-icon2"></div>
                        <div className="toggler-icon3"></div>
                    </button>

                    <div
                        ref={menuRef}
                        className={`small-header ${openMenu ? "show-menu" : ""}`}
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="Home"
                                    smooth={true}
                                    duration={300}
                                    offset={-80}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    HOME
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="About"
                                    smooth={true}
                                    duration={300}
                                    offset={-140}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="Experience"
                                    smooth={true}
                                    duration={300}
                                    offset={-80}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    EXPERIENCE
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="crafted-experience"
                                    smooth={true}
                                    duration={300}
                                    offset={-80}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    WORK
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    to="Contact"
                                    smooth={true}
                                    duration={300}
                                    offset={-80}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    CONTACT
                                </Link>
                            </li>

                            <li className="nav-item me-0">
                                <a
                                    className="nav-link active"
                                    href="/AkshayResume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setOpenMenu(false)}
                                >
                                    RESUME
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;