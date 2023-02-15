import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="first-footer">
        <span>
          {" "}
          Copyright © {new Date().getFullYear()}{" "}
          <span className="msj">MSJ Motors</span>. All Rights Reserved.
        </span>
        <span className="socials">
          <a
            className="social-links"
            href="https://www.instagram.com/msj_motors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="insta" />
          </a>
          <a
            className="social-links"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook href="google.com" className="facebook" />
          </a>
          <a
            className="social-links"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="twitter" />
          </a>
        </span>
      </div>

      <div className="abid-link">
        Developed By
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          ABID
        </a>
      </div>
    </footer>
  );
};

export default Footer;
