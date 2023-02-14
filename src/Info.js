import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Info = () => {
  return (
    <div className="info-section">
      <span className="icon">
        <FaPhoneAlt className="fa-icon" /> +91 988 435 5517, +91 900 316 ****
      </span>
      <span className="icon">
        <FaEnvelope className="fa-icon" />{" "}
        <a href="mailto:jawad@gmail.com">info@msjmotors.com</a>
      </span>
    </div>
  );
};

export default Info;
