import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/christian-wilfredo-ilachoque-hanccoccallo-475198258/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ChristianIlachoque" target="_blank">
        <BsGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};
