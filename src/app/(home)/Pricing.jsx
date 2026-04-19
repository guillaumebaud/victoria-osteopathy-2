"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";

const Pricing = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div id="pricing" className="pricing-area-1 space">
            <div className="container">
                <div className="title-area text-center mb-5">
                    <h2 className="sec-title">Available treatment options and pricing</h2>
                    <p className="sec-text">Book a consultation or treatment that fits your needs. All treatments are customized to address your individual health concerns and goals.</p>
                </div>
                <div className="col-12 home-two-pricing-button-align d-none">
                    <ul className="pricing-tabs nav nav-tabs" role={'tablist'}>
                        <li className="nav-item">
                            <button onClick={() => setIsActive(!isActive)} className={`nav-link ${isActive ? '' : 'active'}`} id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role={"tab"} aria-controls="monthly" aria-selected="true">Monthly Plan</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setIsActive(!isActive)} className={`nav-link ${isActive ? 'active' : ''}`} id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" type="button" role={"tab"} aria-controls="yearly" aria-selected="false">Yearly Plan</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div className={`tab-pane fade ${isActive ? '' : 'show active'}`} id="monthly" role={"tabpanel"} aria-labelledby="monthly-tab">
                    <div className="container">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card">
                                    <h3 className="pricing-card_title">Initial Consultation</h3>
                                    <p className="pricing-card_text">45 minutes</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>125<span className="pricing-card_duration">.00</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Initial assessment and treatment with Michael Dennis. Includes a thorough review of your health history, a full-body musculoskeletal assessment, and a first hands-on treatment tailored to your needs. Ideal for new patients starting their osteopathic care.</p>
                                    </div>
                                    <Button
                                        component={Link}
                                        href="/book-appointment"
                                        variant="contained"
                                        size="medium"
                                        fullWidth
                                        endIcon={<ArrowOutwardIcon />}
                                        sx={{ mt: 2 }}
                                    >
                                        Book Consultation
                                    </Button>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card">
                                    <h3 className="pricing-card_title">Standard Treatment</h3>
                                    <p className="pricing-card_text">30 minutes</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>95<span className="pricing-card_duration">.00</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Ideal for someone who is having ongoing osteopathic treatments, as part of their healthcare maintenance program.</p>
                                    </div>
                                    <Button
                                        component={Link}
                                        href="/book-appointment"
                                        variant="contained"
                                        size="medium"
                                        fullWidth
                                        endIcon={<ArrowOutwardIcon />}
                                        sx={{ mt: 2 }}
                                    >
                                        Book Appointment
                                    </Button>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card">
                                    <h3 className="pricing-card_title">Extended Standard Treatment</h3>
                                    <p className="pricing-card_text">45 minutes</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>125<span className="pricing-card_duration">.00</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Ideal for those seeking more in-depth or deep care. A longer session allows Michael to address multiple areas of concern, work through more complex patterns of tension, and spend extra time with hands-on treatment for lasting results.</p>
                                    </div>
                                    <Button
                                        component={Link}
                                        href="/book-appointment"
                                        variant="contained"
                                        size="medium"
                                        fullWidth
                                        endIcon={<ArrowOutwardIcon />}
                                        sx={{ mt: 2 }}
                                    >
                                        Book Appointment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* Closing container for spacing */}
        </div>
    );
};

export default Pricing;
