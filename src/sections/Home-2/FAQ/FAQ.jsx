"use client";

import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-area-1 space-bottom overflow-hidden shape-mockup-wrap">
      <div
        className="faq-bg-shape1-1 shape-mockup d-lg-block d-none"
        data-top="0"
        data-left="0"
      >
        <img src="/main-assets/img/bg/faq-bg-shape1-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title">Frequently Asked Questions</h2>
        </div>
        <div className="row gy-50 justify-content-center">
          <div className="col-xl-8">
            <div id="faqAccordion">
              {/* Accordion items */}
              <Accordion
                defaultActiveKey="0"
                className="accordion-area homeTwo-custom-accordion-card"
              >
                <Accordion.Item eventKey="0" className="accordion-card">
                  <Accordion.Header>
                    What is Osteopathy?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Osteopathy is a hands on manual assessment and adjustment of the tissues that comprise your musculoskeletal framework. It is non-invasive, drug free, gentle, and accessible to nearly all individuals, regardless of age or ability.
                    </p>
                    <p className="faq-text">
                      An Osteopathic Manual Practitioner endeavours to find and treat the source of pain or altered function in a person's body; it is not simply a matter of treating symptoms. Often clients seeking help from an OMP will have already tried other modalities of therapy, but can feel like the root of the problem still persists.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="1">
                  <Accordion.Header>
                    What can Osteopathy treat?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Osteopathy can treat a wide range of conditions including back and neck pain, joint pain, headaches, sports injuries, digestive issues, and chronic pain conditions. It's particularly effective for musculoskeletal problems and can help improve overall body function and mobility.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="2">
                  <Accordion.Header>
                    How many sessions will I need?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The number of sessions varies depending on your condition, health history, and treatment goals. Some clients experience improvement after one session, while others may need several treatments. Michael will discuss a treatment plan with you during your consultation based on your individual needs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="3">
                  <Accordion.Header>
                    Is Osteopathy safe for children?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Yes, osteopathy is very safe for children and can be beneficial for various pediatric conditions. Michael uses gentle, age-appropriate techniques specifically tailored for young patients. Special pricing is available for patients under 16 years of age.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="4">
                  <Accordion.Header>
                    Do I need a referral from my doctor?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      No, you do not need a referral from your doctor to see an Osteopathic Manual Practitioner. You can book directly with Michael. However, it's always good to keep your healthcare team informed about any treatments you're receiving.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
