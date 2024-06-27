import "./Header.css";
import { CTA } from "./CTA";
import ME from "../../assets/logo_chris_dev.png";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Chris Dev</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Hacia abajo!
        </a>
      </div>
    </header>
  );
};
