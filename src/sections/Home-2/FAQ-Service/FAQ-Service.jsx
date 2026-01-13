import Link from "next/link";

const FAQService = () => {
  return (
    <div className="service-area-2 space-top overflow-hidden shape-mockup-wrap" id="faq-sec">
      <div className="container">
        <div className="row justify-content-xl-start justify-content-center">
          <div className="col-xxl-4 col-xl-5 col-md-6">
            <div className="title-area mb-0 service-area-content-text-extra-style">
              <span className="sub-title"><img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" /> FAQs</span>
              <h2 className="sec-title">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="sec-text">Learn more about osteopathy and how it can help you achieve better health and wellness.</p>
            </div>
          </div>
        </div>
        <div className="service-card-wrap2">
          <div className="row">
            <div className="col-xl-6 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">
                  01
                </div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src="/main-assets/img/icon/service-icon2-1.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title">What is Osteopathy?</h4>
                  <p className="service-card_text">Osteopathy is a hands on manual assessment and adjustment of the tissues that comprise your musculoskeletal framework. It is non-invasive, drug free, gentle, and accessible to nearly all individuals, regardless of age or ability. An Osteopathic Manual Practitioner endeavours to find and treat the source of pain or altered function in a person's body; it is not simply a matter of treating symptoms.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">
                  02
                </div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src="/main-assets/img/icon/service-icon2-2.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title">What can Osteopathy treat?</h4>
                  <p className="service-card_text">Osteopathy can treat a wide range of conditions including back and neck pain, joint pain, headaches, sports injuries, digestive issues, and chronic pain conditions. It's particularly effective for musculoskeletal problems and can help improve overall body function and mobility.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">
                  03
                </div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src="/main-assets/img/icon/service-icon2-3.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title">How many sessions will I need?</h4>
                  <p className="service-card_text">The number of sessions varies depending on your condition, health history, and treatment goals. Some clients experience improvement after one session, while others may need several treatments. Michael will discuss a treatment plan with you during your consultation based on your individual needs.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">
                  04
                </div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src="/main-assets/img/icon/service-icon2-4.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title">Is Osteopathy safe for children?</h4>
                  <p className="service-card_text">Yes, osteopathy is very safe for children and can be beneficial for various pediatric conditions. Michael uses gentle, age-appropriate techniques specifically tailored for young patients. Special pricing is available for patients under 16 years of age.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">
                  05
                </div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <img src="/main-assets/img/icon/service-icon2-1.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title">Do I need a referral from my doctor?</h4>
                  <p className="service-card_text">No, you do not need a referral from your doctor to see an Osteopathic Manual Practitioner. You can book directly with Michael. However, it's always good to keep your healthcare team informed about any treatments you're receiving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQService;