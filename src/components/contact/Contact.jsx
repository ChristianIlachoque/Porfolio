import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const formService = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = [];
    if (form.name.length === 0) errors.push("Nombre es un dato necesario");
    if (form.email.length === 0) errors.push("Correo es un dato necesario");
    if (form.message.length === 0) errors.push("Mensaje es un dato necesario");

    if (errors.length > 0) {
      let message = "";
      errors.forEach((error) => (message += `${error}\n - `));
      // MESSAGE ALERT ERRORS
      Swal.fire({
        title: "Error al enviar",
        text: message,
        icon: "info",
      });
      return;
    }

    // SEND MESSAGE
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formService.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          Swal.fire({
            title: "Correo enviado",
            text: "Se envió su correo",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            title: "Correo NO enviado",
            text: "No se envió su correo, intentelo mas tarde",
            icon: "error",
          });
        }
      );

    // RESET FORM
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>christian.ilachoque.dev@gmail.com</h5>
            <a
              href="mailto:christian.ilachoque.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>helliot.mrrobot</h5>
            <a
              href="https://www.facebook.com/helliot.mrrobot.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+51 982239108</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+982239108"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
        </div>
        <form ref={formService} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            onChange={handleFormChange}
            value={form.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            onChange={handleFormChange}
            value={form.email}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            onChange={handleFormChange}
            value={form.message}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
