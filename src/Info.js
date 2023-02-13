import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Info = () => {
  return (
    <div className="info-section">
      <span className="icon">
        <FaPhoneAlt className="fa-icon" /> +91 900 327 ****, +91 900 316 ****
      </span>
      <span className="icon">
        <FaEnvelope className="fa-icon" />{" "}
        <a href="mailto:jawad@gmail.com">Jawad@gmail.com</a>
      </span>
    </div>
  );
};

export default Info;
