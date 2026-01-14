'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";
const About = () => {
    return (
        <div className="about-area-2 space overflow-hidden shape-mockup-wrap" id="about-sec">
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-thumb">
                                <Image src="/victoria-osteopathy/assets/michael_dennis_portrait.jpg" alt="Michael Dennis - Osteopathic Manual Practitioner" width={500} height={600} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <span className="sub-title">Osteopathic Manual Practitioner</span>
                            <h2 className="sec-title">Michael Dennis</h2>
                            <p className="sec-text">Michael holds a Master of Practice Diploma in Osteopathic Manipulative Sciences, earned through the four year program at the Canadian Academy of Osteopathy in Hamilton, Ontario.
                            </p>
                            <p className="sec-text">As a new resident of Victoria, Michael is excited to bring his passion for osteopathy to the community and is accepting new patients into his practice.
                            </p>
                        </div>
                        <div className="checklist">
                            <ul>
                                <li><span className="blue-square-icon"></span>Master of Practice Diploma in Osteopathic Manipulative Sciences
                                </li>
                                <li><span className="blue-square-icon"></span>Graduate of Canadian Academy of Osteopathy, Hamilton</li>
                            </ul>
                        </div>
                        <div className="btn-group mt-60">
                            <Button
                                component={Link}
                                href="/about-us"
                                variant="contained"
                                size="medium"
                                endIcon={<ArrowOutwardIcon />}
                            >
                                Learn more about Michael
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;