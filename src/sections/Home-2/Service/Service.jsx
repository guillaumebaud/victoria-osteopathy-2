import Link from "next/link";


const Service = () => {
    return (
        <div className="service-area-2 space-top overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
            <div className="container">
                <div className="row justify-content-xl-start justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                        <div className="title-area mb-0 service-area-content-text-extra-style">
                            <span className="sub-title"><img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" /> What We Do</span>
                            <h2 className="sec-title">OUR OSTEOPATHIC SERVICES</h2>
                            <div className="btn-group mt-50 justify-content-xl-start justify-content-center">
                                <Link href="/pages/innerpage/service" className="btn">VIEW ALL SERVICES <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card-wrap2">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    01
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/main-assets/img/icon/service-icon2-1.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link href="/pages/innerpage/service-details">MANUAL OSTEOPATHY</Link></h4>
                                    <p className="service-card_text">Gentle hands-on treatment to restore mobility and reduce pain through soft tissue manipulation</p>
                                    <div className="btn-wrap">
                                        <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    02
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/main-assets/img/icon/service-icon2-2.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link href="/pages/innerpage/service-details">PAIN MANAGEMENT</Link></h4>
                                    <p className="service-card_text">Comprehensive approach to chronic pain relief using evidence-based osteopathic techniques</p>
                                    <div className="btn-wrap">
                                        <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    03
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/main-assets/img/icon/service-icon2-3.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link href="/pages/innerpage/service-details">SPORTS INJURY THERAPY</Link></h4>
                                    <p className="service-card_text">Specialized treatment for athletic injuries with focus on rehabilitation and prevention</p>
                                    <div className="btn-wrap">
                                        <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    04
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/main-assets/img/icon/service-icon2-4.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link href="/pages/innerpage/service-details">WELLNESS & PREVENTION</Link></h4>
                                    <p className="service-card_text">Holistic health assessments and preventive care to maintain optimal wellness</p>
                                    <div className="btn-wrap">
                                        <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-end right-end">
                    <div className="cta-wrap2">
                        <div className="cta-title-wrap">
                            <h3 className="cta-title">Ready to book?</h3>
                            <p className="cta-text">Schedule your appointment today!</p>
                        </div>
                        <div className="cta-contact-grid">
                            <div className="icon-btn">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="cta-contact-grid-details">
                                <Link className="link" href="tel:+12505551234">+1 (250) 555-1234</Link>
                                <h6 className="title">Mon - Fri : 9am - 6pm</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;