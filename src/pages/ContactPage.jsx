import Contact from "../assets/contact.jpg";

import ContactInfo from "../components/ContactInfo";
import BookingForm from "../components/BookingForm";
import Map from "../components/Map";

export default function ContactPage() {
  return (
    <article className="contact">
      <section className="hero">
        <img className="image" src={Contact} alt="Product" />
      </section>
      <section className="content-section">
        <ContactInfo />
        <BookingForm />
      </section>
      <Map />
    </article>
  );
}
