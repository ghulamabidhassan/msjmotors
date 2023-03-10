import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Map from "./Map";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p className="contact-content">
        Dont hesitate to contact us on
        <br />
        <br />
        <span className="icon">
          <FaPhoneAlt className="fa-icon" /> +91 812 480 0081
        </span>
        <br />
        <span className="icon">
          <FaEnvelope className=" fa-icon" />{" "}
          <a className="inherit" href="mailto:jawad@gmail.com">
            info@msjmotors.com
          </a>
        </span>
      </p>
      <br />
      <Map />
    </section>
  );
};

export default Contact;
