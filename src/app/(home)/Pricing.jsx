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
                            <div className="col-xl-3 col-md-6">
                                <div className="pricing-card">
                                    <h4 className="pricing-card_title">Consultation</h4>
                                    <p className="pricing-card_text">15 minutes</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">FREE</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Book a free 15 minute consultation with Michael Dennis. During this consultation you can ask questions about osteopathy and find out if osteopathic treatment is right for you.</p>
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
                            <div className="col-xl-3 col-md-6">
                                <div className="pricing-card">
                                    <h4 className="pricing-card_title">Standard Treatment</h4>
                                    <p className="pricing-card_text">30 minutes</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>90<span className="pricing-card_duration">.00</span>
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
                            <div className="col-xl-3 col-md-6">
                                <div className="pricing-card">
                                    <h4 className="pricing-card_title">In Home Treatment</h4>
                                    <p className="pricing-card_text">60 minutes per session</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>125<span className="pricing-card_duration">.00</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Available for anywhere in the Greater Victoria Region. Advance booking required. Please contact Michael directly at 905-933-8594 to arrange a mobile service call.</p>
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
                            <div className="col-xl-3 col-md-6">
                                <div className="pricing-card">
                                    <h4 className="pricing-card_title">Under 16</h4>
                                    <p className="pricing-card_text">30 minutes per session</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>50<span className="pricing-card_duration">.00</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <p>Ideal for someone under the age of 16, who is having osteopathic treatment as part of their healthcare maintenance program. Assessment and treatment will be focused on the individual needs of the child.</p>
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