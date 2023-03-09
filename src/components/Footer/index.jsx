import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer-div">
      <p>All rights reserved &copy; </p>
      <a href="https://www.linkedin.com/in/hyanlopes/">
        <AiFillLinkedin color="#78868f" />
      </a>
      <a href="https://github.com/hyanlopes">
        <AiFillGithub color="#78868f" />
      </a>
    </div>
  );
};
export default Footer;
