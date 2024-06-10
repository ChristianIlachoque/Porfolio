import "./Services.css";

import { BiCheck } from "react-icons/bi";
export const Services = () => {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Sitios Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de sitios web estáticos y dinámicos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollo de sitios web corporativos y de empresa.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de portafolios en línea para profesionales y
                artistas.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollo de blogs y foros.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollo de landing pages y micrositios.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Aplicaciones Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de aplicaciones web progresivas (PWA) para una
                experiencia de usuario mejorada.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de aplicaciones web para diversos propósitos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integración de sistemas de pago y pasarelas de pago en
                aplicaciones web de comercio electrónico.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de sistemas de autenticación y autorización seguros
                para aplicaciones web.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementación de funcionalidades de geolocalización.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Optimización y Mantenimiento</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimización de rendimiento y velocidad de carga.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Actualización de versiones de software y plugins.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mantenimiento regular para garantizar la seguridad y el correcto
                funcionamiento del sitio web.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rediseño y migración de sitios web.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
