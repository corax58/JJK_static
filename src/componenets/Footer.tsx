import "../componenets/Footer.css";
import {
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCopyright,
} from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="contact-element">
          <FaFacebook />
          <a className="link-light" href="#">
            Facebook
          </a>
        </div>
        <div className="contact-element">
          <FaInstagram></FaInstagram>{" "}
          <a className="link-light" href="#">
            Instagram
          </a>
        </div>
        <div className="contact-element">
          <FaTelegram></FaTelegram>{" "}
          <a className="link-light" href="http://t.me/menitrust12">
            Telegram
          </a>
        </div>
        <div className="contact-element">
          <FaTwitter></FaTwitter>
          <a className="link-light" href="#">
            Twitter
          </a>
        </div>
      </div>
      <hr className="border footer-line" />
      <div className="credit">
        <LuCopyright></LuCopyright> Made by Abubeker
      </div>
    </div>
  );
};

export default Footer;
