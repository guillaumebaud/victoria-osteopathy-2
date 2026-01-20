'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
import { ArrowOutward as ArrowOutwardIcon } from "@mui/icons-material";

const TestimonialSection = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Nora Liscomb",
      location: "Victoria, BC",
      photo: null, // No photo available
      text: "Hello! I've been receiving tune-up treatments from Michael since April 2024, and I can confidently say I would be devastated if he decided to move off the island! Haha no joke. Michael is well-spoken, empathetic, and incredibly skilled. During every session, I ask many many questions about his techniques and what he's doing. Michael always takes the time to explain everything in detail without any judgment, ensuring I understand. Michael's punctuality is another testament to his professionalism—he's always on time, which I truly appreciate. What sets Michael apart is his approachable and friendly demeanor. He's incredibly easy to talk to, which makes the entire experience much more enjoyable. Whether discussing treatment options or just having a casual conversation, Michael makes every visit a pleasant one. Since I started seeing Michael, I have noticed significant improvements in my overall well-being. His expertise and personalized approach have made a remarkable difference in how I feel day-to-day. I truly value his dedication to providing the best possible care and his commitment to his patients' health. Even after my benefits run up I'll see be going to sessions! I highly recommend Michael, the osteopath wiz! If you're looking for a skilled, empathetic, and professional osteopath who genuinely cares about his patients, Michael is the one to see. Thank you, Michael, for your outstanding care and for helping me achieve better health!",
      shortText: "Hello! I've been receiving tune-up treatments from Michael since April 2024, and I can confidently say I would be devastated if he decided to move off the island! Michael is well-spoken, empathetic, and incredibly skilled. During every session, he takes the time to explain everything in detail...",
      rating: 5
    },
    {
      id: 2,
      name: "Janice Atkins",
      location: "Victoria, BC",
      photo: null, // No photo available
      text: "This is the most successful treatment I have tried to relieve sciatica. I went for my first session using a cane and left carrying my cane. I am self employed and was afraid that I would not be able to work anymore. I went to work the next day after treatment and for the rest of the week thereafter. Michael is so easy to talk with and left me with the directive to 'go live your life' and gave me the ability to do just that. Many thanks!",
      shortText: "This is the most successful treatment I have tried to relieve sciatica. I went for my first session using a cane and left carrying my cane. Michael is so easy to talk with and left me with the directive to 'go live your life'...",
      rating: 5
    },
    {
      id: 3,
      name: "Tiffany Boucher",
      location: "Victoria, BC",
      photo: "/assets/tiffany_boucher.png",
      text: "Michael is amazing! I recommend him to anyone I get the chance to. He has made a huge difference to my chronic pain I've been dealing with for a long time! His hands are made to do this! He is super knowledgeable and has been awesome to see. He definitely knows what he is doing!",
      shortText: "Michael is amazing! I recommend him to anyone I get the chance to. He has made a huge difference to my chronic pain I've been dealing with for a long time! His hands are made to do this!",
      rating: 5
    },
    {
      id: 4,
      name: "Kirk Clyne",
      location: "Victoria, BC",
      photo: "/assets/Kirk_Clyne.png",
      text: "After decades of chronic headaches from neck and shoulder tension, I went a full month headache-free after just four short visits with Mike — no homework or exercises. It's been life-changing. Mike's approach is gentle, grounded in medical science (not \"woo\"), and somehow he still credits me for the healing. He's knowledgeable, thorough in his explanations, and clearly passionate about what he does. If you're dealing with chronic back, neck, or shoulder pain, Mike is an undiscovered gem.",
      shortText: "After decades of chronic headaches from neck and shoulder tension, I went a full month headache-free after just four short visits with Mike — no homework or exercises. It's been life-changing...",
      rating: 5
    },
    {
      id: 5,
      name: "Iwan Beynon",
      location: "Victoria, BC",
      photo: "/assets/Iwan_beynon.png",
      text: "Michael is a true professional. His ability to tailor the treatment and quickly identify the underlying issue truly sets him apart. Extremely reliable and effective treatment- highly recommended!",
      shortText: "Michael is a true professional. His ability to tailor the treatment and quickly identify the underlying issue truly sets him apart. Extremely reliable and effective treatment- highly recommended!",
      rating: 5
    },
    {
      id: 6,
      name: "Alexandra Berg",
      location: "Victoria, BC",
      photo: "/assets/alexandra_berg.png",
      text: "Michael is one of the best osteopaths I've worked with! His treatments are always well targeted and effective, and I've seen a huge improvement with some long-term issues in a short amount of time. Highly recommended!",
      shortText: "Michael is one of the best osteopaths I've worked with! His treatments are always well targeted and effective, and I've seen a huge improvement with some long-term issues in a short amount of time.",
      rating: 5
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to handle image errors and fallback to default avatar
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = '<div class="author-avatar-fallback"><span class="user-icon">👤</span></div>';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? '#FFD700' : '#E2E8F0',
          fontSize: '20px',
          marginRight: '3px'
        }}
      >
        {index < rating ? '★' : '☆'}
      </span>
    ));
  }; return (
    <div className="testimonial-section-area space bg-light">
      <div className="container">
        <div className="title-area text-center mb-5">
          <span className="sub-title">Patient Reviews</span>
          <h2 className="sec-title">What Our Patients Say</h2>
          <p className="sec-text">
            Read what patients have to say about their experience with osteopathic care at Victoria Osteopathy. All reviews are taken directly from Google Reviews to ensure authenticity.
          </p>
        </div>

        <div className="row gy-4">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedReviews[testimonial.id];
            const shouldTruncate = testimonial.text.length > testimonial.shortText.length;

            return (
              <div key={testimonial.id} className="col-lg-4 col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-rating mb-3">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      "{isExpanded ? testimonial.text : testimonial.shortText}"
                    </p>
                    {shouldTruncate && (
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => toggleExpanded(testimonial.id)}
                        sx={{ p: 0, minWidth: 'auto' }}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button>
                    )}
                  </div>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <div className="author-photo">
                        {testimonial.photo ? (
                          <Image
                            src={testimonial.photo}
                            alt={`${testimonial.name} photo`}
                            width={60}
                            height={60}
                            onError={handleImageError}
                          />
                        ) : (
                          <div className="author-avatar-fallback">
                            <span className="user-icon">👤</span>
                          </div>
                        )}
                      </div>
                      <div className="author-details">
                        <h5 className="author-name">{testimonial.name}</h5>
                        <p className="author-location">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <div className="testimonial-cta">
            <h4 className="mb-3">Ready to Experience the Difference?</h4>
            <p className="mb-4">Join our satisfied patients and discover how osteopathy can help you achieve optimal health.</p>
            <Button
              component={Link}
              href="/book-appointment"
              variant="contained"
              size="medium"
              endIcon={<ArrowOutwardIcon />}
            >
              Book Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
