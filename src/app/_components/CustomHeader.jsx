"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Fab, useMediaQuery, useTheme } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CustomHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // matches 1140px breakpoint

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
    <>
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

        {/* CTA Button - Desktop only */}
        {!isMobile && (
          <Button
            component={Link}
            href="/book-appointment"
            variant="contained"
            size="medium"
          >
            Book an appointment
          </Button>
        )}

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
        </ul>
      </div>

    </header>

    {/* Mobile FAB - Floating Action Button (outside header to avoid transform issues) */}
    {isMobile && (
      <Fab
        component={Link}
        href="/book-appointment"
        color="primary"
        aria-label="Book appointment"
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 1100,
          width: 64,
          height: 64,
          boxShadow: '0 4px 20px rgba(46, 94, 170, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 25px rgba(46, 94, 170, 0.5)',
          }
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: 28 }} />
      </Fab>
    )}
    </>
  );
};

export default CustomHeader;