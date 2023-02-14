import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=919884355517"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon-whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;
