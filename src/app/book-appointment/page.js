export const metadata = {
  title: "Book Appointment",
  description: "Book your osteopathic treatment appointment with Michael Dennis in Victoria, BC. Two convenient locations: Geometry Integrated Health and Peninsula Physiotherapy Clinic.",
  openGraph: {
    title: "Book Appointment | Victoria Osteopathy",
    description: "Schedule your osteopathic treatment in Victoria, BC. Two convenient locations available.",
  },
};

import BookAppointmentContent from './BookAppointmentContent';

// Import required CSS files
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/magnific-popup.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/custom-styles.css";

export default function BookAppointment() {
  return <BookAppointmentContent />;
}
