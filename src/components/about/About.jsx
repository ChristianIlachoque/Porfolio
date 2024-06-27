import "./About.css";
import ME from "../../assets/about_me_chris.jpg";
import { BiAward } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about">
      <h5>Conoce más!</h5>
      <h2>Sobre mí</h2>

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
              <h5>Experiencia</h5>
              <small>+1 Trabajando</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>Freelancer</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Proyectos</h5>
              <small>20+ Completos</small>
            </article>
          </div>
          <div className="about__description">
            <p>
              Hola! Soy <b>Chris Dev</b>, Desarrollador Web Full Stack
              <b> convierto café en líneas de Software!</b>
            </p>
            <ol>
              <li>
                Frontend: Creo interfaces interactivas y atractivas con React y
                Angular. 🎨 🖱️ 🔧
              </li>
              <li>
                Backend: Construyo sistemas robustos con Java, Node.js and Python. ⚙️
                � �📚
              </li>
              <li>
                Aprendiz perpetuo: Siempre al día con las últimas tendencias y
                tecnologías. 🌐 📈 🎮
              </li>
              <li>
                Fuera del código: Fan de los videojuegos, la ciencia ficción y
                el buen café. ☕ 🎬 🎮
              </li>
            </ol>
            <p>Listo para transformar tus ideas en realidad digital! 🚀</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};
