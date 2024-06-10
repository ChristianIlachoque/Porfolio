import "./Services.css";

import { BiCheck } from "react-icons/bi";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developmet</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of static and dynamic websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of corporate and company websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of online portfolios for professionals and artists.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of blogs and forums.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of landing pages and microsites.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Appllication Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web applications such as management, reservation systems.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of online stores and e-commerce.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of administration panels for applications and
                websites.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development of secure authentication and authorization systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development of progressive web applications (PWA).</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Optimization and Maintenance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimization of performance and loading speed.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Update software and plugin versions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Regular maintenance to ensure the security and proper
                functioning of the website.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Redesign and migration of websites.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
