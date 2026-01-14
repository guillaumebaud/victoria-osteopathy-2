'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";

const AboutOsteopathyContent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="about-osteopathy-hero space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title mb-4">Understanding Osteopathy</h1>
              <p className="hero-subtitle">
                Discover the principles and practices of osteopathic manual therapy and how it can help restore your body's natural healing abilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is Osteopathy Section */}
      <div className="osteopathy-intro-section space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="osteopathy-content">
                <h2 className="sec-title mb-4">What is Osteopathy?</h2>
                <p className="content-text">
                  Osteopathy is a holistic form of manual therapy and adjustment, where the body is viewed as a whole, integrated, dynamic unit of function, requiring all tissue and structures to be aligned properly together to allow for optimal function and health.
                </p>
                <p className="content-text">
                  Through gentle manipulations, osteopathic practitioners work to remove obstructions that restrict the proper flow of blood, lymphatics and nerve impulses within the body, restoring the proper and natural balance to these systems. Osteopathy provides a safe, natural, and non-invasive treatment tailored to the individual; no two treatments are ever the same.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="osteopathy-image">
                {/* Placeholder for a relevant osteopathy image */}
                <div className="placeholder-image">
                  <div className="placeholder-content">
                    <i className="ri-hand-heart-line"></i>
                    <p>Holistic Manual Therapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Can Osteopathy Treat Section */}
      <div className="osteopathy-treatment-section bg-light space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="sec-title">What Can Osteopathy Treat?</h2>
              </div>
              <div className="row gy-3 justify-content-center">
                <div className="col-md-6">
                  <div className="treatment-list">
                    <ul>
                      <li><i className="ri-check-line"></i> Acute / Chronic Neck and Back Pain</li>
                      <li><i className="ri-check-line"></i> Generalized Muscle and Joint Pain</li>
                      <li><i className="ri-check-line"></i> Digestive Problems</li>
                      <li><i className="ri-check-line"></i> Postural Issues</li>
                      <li><i className="ri-check-line"></i> Headaches and Migraines</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="treatment-list">
                    <ul>
                      <li><i className="ri-check-line"></i> Congestion and Sinus Issues</li>
                      <li><i className="ri-check-line"></i> Sleep Problems and Stress</li>
                      <li><i className="ri-check-line"></i> Sport-Related Injuries</li>
                      <li><i className="ri-check-line"></i> Weakened Constitution and Fatigue</li>
                      <li><i className="ri-check-line"></i> Much More!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Explanation Section */}
      <div className="osteopathy-detailed-section space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="detailed-content">
                <h2 className="sec-title mb-4">Understanding Osteopathic Practice</h2>
                <p className="content-text">
                  Osteopathy is a hands on manual assessment and adjustment of the tissues that make up your musculoskeletal framework. It is non-invasive, drug free, gentle, and accessible to nearly all individuals, regardless of age or ability.
                </p>
                <p className="content-text">
                  Osteopathy is also a skill, mindset and thought process. Its foundation is the axiom that the body is a self-regulating, self-healing dynamic unit of function. All parts and systems of the body are interconnected and interdependent on the others. An Osteopathic Manual Practitioner uses their hands to assess structures such as bones, muscles, fascia and joints, and using their extensive knowledge of anatomy and physiology, interprets the position, mobility and quality of these components. Adjustments are made to improve the flow of blood, lymphatics and nerve impulses; improving the qualities of circulation, mobility and constitution. Successful osteopathic treatment can lead to a reduction of restricted mobility, stiffness and pain.
                </p>
                <p className="content-text">
                  An Osteopathic Manual Practitioner endeavours to find and treat the source of pain or altered function in a person's body; it is not simply a matter of treating symptoms. Often clients seeking help from an OMP will have already tried other modalities of therapy, but can feel like the root of the problem still persists. It is here that the osteopathic philosophy can be applied in therapy to help discover the source of dysfunction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation & History Section */}
      <div className="osteopathy-foundation-section bg-light space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="foundation-content">
                <h2 className="sec-title mb-4">Osteopathy's Foundation</h2>
                <p className="content-text">
                  Osteopathy was discovered by Dr. Andrew Taylor Still in the mid 1800's. An American Civil War physician, Dr Still sought to develop non-medical and non-pharmacological treatments for patients. His core osteopathic principles are followed by Principle Based trained Osteopathic practitioners today.
                </p>
                <div className="principles-section mt-4">
                  <h4 className="principles-title">The Core Principles of Osteopathic Treatment:</h4>
                  <ul className="principles-list">
                    <li><i className="ri-arrow-right-line"></i> The body is a dynamic unit of function</li>
                    <li><i className="ri-arrow-right-line"></i> Structure and Function are reciprocally interrelated</li>
                    <li><i className="ri-arrow-right-line"></i> The body is self-healing and self-regulating</li>
                    <li><i className="ri-arrow-right-line"></i> Rational treatment is based on the above principles</li>
                  </ul>
                </div>
                <blockquote className="osteopathy-quote mt-4">
                  <p>"An osteopath is only a human engineer, who should understand all the laws governing his engine and thereby master disease."</p>
                  <cite>— Dr Andrew Still</cite>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="foundation-image">
                <Image
                  src="/victoria-osteopathy/assets/andrew-taylor.jpg"
                  alt="Dr. Andrew Taylor Still - Founder of Osteopathy"
                  width={400}
                  height={500}
                  className="img-fluid rounded shadow"
                />
                <div className="image-caption">
                  <p>Dr. Andrew Taylor Still<br />Founder of Osteopathy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="osteopathy-cta-section space">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2 className="sec-title mb-4">Experience Osteopathic Care</h2>
                <p className="content-text mb-4">
                  Ready to discover how osteopathic manual therapy can help restore your body's natural balance and healing capacity?
                </p>
                <div className="cta-buttons">
                  <Button
                    component={Link}
                    href="/book-appointment"
                    variant="contained"
                    size="medium"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{ mr: 2 }}
                  >
                    Book Your Consultation
                  </Button>
                  <Button
                    component={Link}
                    href="/about-us"
                    variant="outlined"
                    size="medium"
                  >
                    Meet Your Practitioner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOsteopathyContent;