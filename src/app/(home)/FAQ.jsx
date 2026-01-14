"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: "panel0",
      question: "What is Osteopathy?",
      answer: [
        "Osteopathy is a hands on manual assessment and adjustment of the tissues that comprise your musculoskeletal framework. It is non-invasive, drug free, gentle, and accessible to nearly all individuals, regardless of age or ability.",
        "An Osteopathic Manual Practitioner endeavours to find and treat the source of pain or altered function in a person's body; it is not simply a matter of treating symptoms. Often clients seeking help from an OMP will have already tried other modalities of therapy, but can feel like the root of the problem still persists."
      ]
    },
    {
      id: "panel1",
      question: "What can Osteopathy treat?",
      answer: [
        "Osteopathy can treat a wide range of conditions including back and neck pain, joint pain, headaches, sports injuries, digestive issues, and chronic pain conditions. It's particularly effective for musculoskeletal problems and can help improve overall body function and mobility."
      ]
    },
    {
      id: "panel2",
      question: "How many sessions will I need?",
      answer: [
        "The number of sessions varies depending on your condition, health history, and treatment goals. Some clients experience improvement after one session, while others may need several treatments. Michael will discuss a treatment plan with you during your consultation based on your individual needs."
      ]
    },
    {
      id: "panel3",
      question: "Is Osteopathy safe for children?",
      answer: [
        "Yes, osteopathy is very safe for children and can be beneficial for various pediatric conditions. Michael uses gentle, age-appropriate techniques specifically tailored for young patients. Special pricing is available for patients under 16 years of age."
      ]
    },
    {
      id: "panel4",
      question: "Do I need a referral from my doctor?",
      answer: [
        "No, you do not need a referral from your doctor to see an Osteopathic Manual Practitioner. You can book directly with Michael. However, it's always good to keep your healthcare team informed about any treatments you're receiving."
      ]
    }
  ];

  return (
    <div className="faq-area-1 space-bottom overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title">Frequently Asked Questions</h2>
        </div>
        <div className="row gy-50 justify-content-center">
          <div className="col-xl-8">
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                  mb: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  borderRadius: "8px !important",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": { margin: "0 0 16px 0" }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#2E5EAA" }} />}
                  sx={{
                    minHeight: 64,
                    "& .MuiAccordionSummary-content": { margin: "16px 0" }
                  }}
                >
                  <Typography sx={{ fontWeight: 600, color: "#333" }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  {item.answer.map((paragraph, index) => (
                    <Typography
                      key={index}
                      sx={{ color: "#555", lineHeight: 1.8, mb: index < item.answer.length - 1 ? 2 : 0 }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
