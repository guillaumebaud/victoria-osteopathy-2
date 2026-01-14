'use client';
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
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
                        <div className="checklist mb-35">
                            <ul>
                                <li><span className="blue-square-icon"></span>Master of Practice Diploma in Osteopathic Manipulative Sciences
                                </li>
                                <li><span className="blue-square-icon"></span>Graduate of Canadian Academy of Osteopathy, Hamilton</li>
                            </ul>
                        </div>
                        <div className="btn-group mt-60">
                            <Link href="/about-us" className="btn style3">Learn more about Michael <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;