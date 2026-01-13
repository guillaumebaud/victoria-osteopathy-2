"use client";
import Link from "next/link";
import { useState } from "react";
import CircleTextTwo from "../../Common/CircleTextTwo";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div
        className="hero-wrapper hero-2 shape-mockup-wrap home-two-hero-space"
        id="hero"
      >
        <div className="hero-slide">
          <div className="container">
            <div className="hero-style2 hero-two-extra-style">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="hero-title slider-custom-anim-left slider-animated">
                    What can Osteopathy treat?
                  </h1>
                </div>
                <div className="col-lg-7">
                  <div className="hero-thumb text-center slideinleft slider-animated">
                    <img src="/victoria-osteopathy/assets/prodslider.jpg" alt="Osteopathy Treatment" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="hero-text slider-custom-anim-left slider-animated">
                    Osteopathy is a hands-on manual assessment and treatment approach that addresses the root causes of pain and dysfunction in your musculoskeletal system.
                  </p>
                  <div className="hero-tag slideinup slider-animated">
                    <div className="btn-group">
                      <Link href="/pages/innerpage/about" className="btn">
                        Learn More <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
