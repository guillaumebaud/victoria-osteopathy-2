"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  return (
    <header className={`simple-header ${isSticky ? 'sticky' : ''}`}>
      <div className="simple-header-container">
        {/* Logo */}
        <div className="simple-logo">
          <Link href="/">
            <Image src="/victoria-osteopathy/assets/logo.jpg" alt="Victoria Osteopathy" width={180} height={60} priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="simple-nav desktop-only">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/about-osteopathy">About Osteopathy</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/book-appointment">Contact</Link></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <Link href="/book-appointment" className="simple-cta desktop-only">
          Book an appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/about-osteopathy" onClick={() => setIsMobileMenuOpen(false)}>About Osteopathy</Link></li>
          <li><Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></li>
          <li><Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link href="/book-appointment" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
              Book an appointment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default CustomHeader;