export const metadata = {
  title: "Book Appointment",
  description: "Book your osteopathic treatment appointment with Michael Dennis in Victoria, BC. Two convenient locations: Geometry Integrated Health and Peninsula Physiotherapy Clinic.",
  openGraph: {
    title: "Book Appointment | Victoria Osteopathy",
    description: "Schedule your osteopathic treatment in Victoria, BC. Two convenient locations available.",
  },
};

import BookAppointmentContent from './BookAppointmentContent';

import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/custom-styles.css";

export default function BookAppointment() {
  return <BookAppointmentContent />;
}
