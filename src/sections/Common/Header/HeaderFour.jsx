"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";

const HeaderFour = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchPopupOpen = () => {
        setIsPopupOpen(true);
    }
    const handleSearchPopupClose = () => {
        setIsPopupOpen(false);
    }

    const handleMobileMenuOpen = () => {
        setIsMenuOpen(true);
    }
    const handleSideBarClose = () => {
        setIsSideBarOpen(false);
    }
    const handleSideBarOpen = () => {
        setIsSideBarOpen(true);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSideBarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    return (
        <div>
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`}>
                <button onClick={handleSearchPopupClose} className="searchClose">
                    <i className="ri-close-line"></i>
                </button>
                <form action="#">
                    <input type="text" placeholder="Search Here.." />
                    <button type="submit">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
            </div>
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content">
                    <button onClick={handleSideBarClose} className="closeButton sideMenuCls">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
            </div>
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <header className="nav-header header-layout2">
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="header-navbar-logo">
                            <Link href="/"><img src="/victoria-osteopathy/assets/logo.jpg" alt="Victoria Osteopathy" /></Link>
                        </div>
                        <div className="logo-bg"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-between home-two-header-justify-content-extra">
                                <div className="col-auto d-xxl-none d-block">
                                    <div className="header-logo">
                                        <Link href="/"><img src="/victoria-osteopathy/assets/logo.jpg" alt="Victoria Osteopathy" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li><Link href="/">HOME</Link></li>
                                            <li><Link href="/pages/innerpage/about">ABOUT</Link></li>
                                            <li><Link href="/pages/innerpage/service">SERVICES</Link></li>
                                            <li><Link href="/pages/innerpage/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={handleMobileMenuOpen} type="button" className="menu-toggle icon-btn">
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none">
                                    <div className="header-button">
                                        <Link href="/pages/innerpage/contact" className="btn">
                                            BOOK APPOINTMENT <i className="ri-arrow-right-up-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-right-desc d-xxl-flex d-none background-image">
                            <div className="navbar-right-desc-details">
                                <h6 className="title">Call for appointment</h6>
                                <Link className="link" href="tel:+12505551234">+1 (250) 555-1234</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderFour;