import "./About.css";
import ME from "../../assets/about_me_chris.jpg";
import { BiAward } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>+1 Working</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>You could be my client</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <div className="about__description">
            <p>
              Hello! I am <b>Chris Dev</b>, full stack web developer
              <b> who turns coffee into lines of software!</b>
            </p>
            <ol>
              <li>
                Frontend: I create interactive and attractive interfaces with
                React and Angular. 🎨 🖱️ 🔧
              </li>
              <li>
                Backend: I build robust systems with Node.js and Python. ⚙️ 🔒
                📚
              </li>
              <li>
                Perpetual learner: Always up to date with the latest trends and
                technologies. 🌐 📈 🎮
              </li>
              <li>
                Outside the code: Fan of video games, sports, science fiction
                and good coffee. ☕ 🎬 🎮
              </li>
            </ol>
            <p>Ready to transform your ideas into digital reality! 🚀</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
