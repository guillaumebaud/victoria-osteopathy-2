"use client";
import Link from "next/link";
import Image from "next/image";

const CustomHero = () => {
  return (
    <section className="custom-hero">
      <div className="custom-hero-bg">
        <Image src="/victoria-osteopathy/assets/prodslider.jpg" alt="Osteopathy Treatment" fill style={{ objectFit: 'cover' }} priority />
        <div className="custom-hero-overlay"></div>
      </div>
      <div className="custom-hero-content">
        <div className="custom-hero-container">
          <h1 className="custom-hero-title">
            What can Osteopathy treat?
          </h1>
          <p className="custom-hero-text">
            Osteopathy is a hands-on manual assessment and treatment approach that addresses the root causes of pain and dysfunction in your musculoskeletal system.
          </p>
          <div className="custom-hero-actions">
            <Link href="/about-us" className="custom-hero-btn">
              Learn More <i className="ri-arrow-right-up-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;