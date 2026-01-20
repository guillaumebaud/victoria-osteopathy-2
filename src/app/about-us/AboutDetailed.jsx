'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";

const AboutDetailed = () => {
  return (
    <>
      {/* Mini Hero Section */}
      <div className="about-us-hero space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title mb-4">Meet Your Practitioner</h1>
              <p className="hero-subtitle">
                Get to know Michael Dennis, your dedicated Osteopathic Manual Practitioner, and discover his journey in helping patients achieve optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-detailed-area space">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-start mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-detailed-image">
                <Image src="/victoria-osteopathy/assets/about_portrait.webp" alt="Michael Dennis - Osteopathic Manual Practitioner" width={500} height={600} className="img-fluid rounded" />
                <div className="credentials-overlay">
                  <div className="credentials-content">
                    <div className="credentials-icon">
                      <i className="ri-award-line"></i>
                    </div>
                    <div className="credentials-text">
                      <h4>Master of Practice Diploma in Osteopathic Manipulative Sciences</h4>
                      <p>Earned through the four year program at the Canadian Academy of Osteopathy in Hamilton, Ontario.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-detailed-content">
                <h1 className="sec-title">Michael Dennis</h1>
                <h3 className="about-subtitle mb-3">Osteopathic Manual Practitioner <br />(M. OMSc)</h3>
                <p className="about-text">
                  As a graduate of Hamilton's prestigious Canadian Academy of Osteopathy, Michael spent four years earning his Master of Practice Diploma in Osteopathic Manipulative sciences (M.OMSc), and is currently a member of OsteopathyBC. An extensive and comprehensive knowledge of anatomy and physiology is the cornerstone to his application of osteopathic principles and treatments for clients.
                </p>

                <p className="about-text">
                  Having suffered an array of injuries and trauma to his body over the years, including a broken back, hernia and multiple concussions and surgeries, Michael's journey of recovery back to health was marked by many setbacks. It was on this journey that he was introduced to Osteopathy as a modality for full body healing, and its potential for affecting the body's ability to heal and restore itself from injuries. Once his body had been properly realigned and given the chance to reset and heal, the progress was remarkable. Literally transformed by his experience, the decision was made to pursue Osteopathy as a career.
                </p>

                <p className="about-text">
                  Drawing from his life experiences, Michael has a deep rooted sense of empathy towards those living in pain and discomfort, and seeks to help others on their road to rehabilitation. As an Osteopathic Manual Practitioner, Michael works as a facilitator to help unlock the body's amazing capacity to heal and regulate itself, and fully believes in the connection between mind, heart and body.
                </p>

                <p className="about-text">
                  Outside of work, Michael can be found discovering new coffee shops and restaurants around town, and exploring the trails and oceanside all across the Island.
                </p>

                <p className="about-text">
                  Michael's approach to treatment is gentle yet effective, focusing on manual techniques that restore balance and function to the musculoskeletal system. He believes in treating each patient as an individual, taking the time to understand their unique circumstances and developing personalized treatment plans.
                </p>

                <p className="about-text">
                  Beyond his clinical practice, Michael continues to expand his knowledge through ongoing education and training in the latest osteopathic techniques. He is committed to providing the highest standard of care for his patients in Victoria.
                </p>

                <div className="about-cta mt-4">
                  <Button
                    component={Link}
                    href="/book-appointment"
                    variant="contained"
                    size="medium"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{ mr: 2 }}
                  >
                    Book an Appointment
                  </Button>
                  <Button
                    component={Link}
                    href="/#pricing"
                    variant="outlined"
                    size="medium"
                  >
                    View Pricing
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

export default AboutDetailed;