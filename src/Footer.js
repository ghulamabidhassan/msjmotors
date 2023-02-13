const Footer = () => {
  return (
    <footer>
      <div>
        Copyright © {new Date().getFullYear()} MSJ Motors. All Rights Reserved.
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
