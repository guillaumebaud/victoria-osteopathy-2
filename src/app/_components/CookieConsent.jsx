"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import { Button, Box, Typography } from "@mui/material";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual ID

const CookieConsent = () => {
  const [consent, setConsent] = useState(null); // null = not yet checked, 'accepted', 'declined'
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for existing consent
    const storedConsent = localStorage.getItem("cookie-consent");
    if (storedConsent) {
      setConsent(storedConsent);
    } else {
      // Show banner after a short delay for smoother UX
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {/* Only load Google Analytics if user accepted */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie Banner */}
      {visible && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(30, 30, 30, 0.95)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            py: 2,
            px: 3,
            zIndex: 9999,
            animation: "slideUp 0.3s ease-out",
            "@keyframes slideUp": {
              from: { transform: "translateY(100%)" },
              to: { transform: "translateY(0)" },
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              mx: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: "#e0e0e0", flex: 1 }}>
              We use cookies to analyze site traffic and improve your experience.
              By clicking "Accept", you consent to our use of analytics cookies.{" "}
              <a
                href="/privacy-policy"
                style={{ color: "#90caf9", textDecoration: "underline" }}
              >
                Privacy Policy
              </a>
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, flexShrink: 0 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleDecline}
                sx={{
                  color: "#e0e0e0",
                  borderColor: "#666",
                  "&:hover": { borderColor: "#999", backgroundColor: "rgba(255,255,255,0.05)" },
                }}
              >
                Decline
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={handleAccept}
                sx={{
                  backgroundColor: "#2E5EAA",
                  "&:hover": { backgroundColor: "#3d6fbb" },
                }}
              >
                Accept
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CookieConsent;
