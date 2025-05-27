import styles from './styles.module.css';
import avatarImg from '/Avatar01.png';
import heroBackground from '/fondo_contacto.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  // emailjs
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true); // activar spinner

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    .then(() => {
      setIsSent(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Error al enviar el formulario:', error);
      alert("Hubo un error al enviar el mensaje.");
    })
    .finally(() => {
      setIsLoading(false); // ocultar spinner
    });
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero section */}
      <div className={styles.heroSection}>
        <img src={heroBackground} alt="Fondo profesional" className={styles.heroBackground} />

        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hablemos</h1>
            <h2 className={styles.heroSubtitle}>Contacto</h2>
            <img src={avatarImg} alt="Avatar" className={styles.heroAvatar} />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Presentación */}
      <section className={styles.presentationSection}>
        <div className={styles.presentationText}>
          <h3>Asesoría para Empresas y Clientes Particulares</h3>
          <p>
            Si estás buscando llevar tu proyecto o empresa al siguiente nivel con soluciones digitales eficientes y a medida, ¡estoy para ayudarte!.
          </p>
          <p>
            Soy <strong>Nicolás Fernández Castillo</strong>, ingeniero industrial con fuerte orientación en tecnología, programación y ciencia de datos. Me especializo en desarrollar herramientas y soluciones que optimicen procesos, faciliten la toma de decisiones y generen valor real, ya sea para equipos de trabajo, negocios o proyectos personales.
          </p>
          <p>
            Estoy abierto a colaborar con empresas, emprendedores o particulares que busquen innovación, análisis y claridad en sus procesos. Ya sea que necesites asesoramiento, desarrollo a medida o simplemente quieras compartir una idea, te invito a escribirme.
          </p>
        </div>

        {/* Tarjetas */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <i className="fas fa-user" /> {/* Cliente particular */}
            <h4>Clientes Particulares</h4>
            <p>Proyectos personales, automatización, análisis de datos y soluciones digitales a medida.</p>
          </div>
          <div className={styles.card}>
            <i className="fas fa-building" /> {/* Empresas */}
            <h4>Empresas</h4>
            <p>Optimización de procesos, dashboards, desarrollo de herramientas internas y consultoría.</p>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* Escríbeme */}
      <section className={styles.contactSection}>
        <div className={styles.contactIntro}>
          <h3>Escríbeme</h3>
          <p>
            ¡No dudes en ponerte en contacto! Si tenés alguna pregunta o inquietud sobre mis servicios, completá el formulario y estaré encantado de ayudarte. ¡Espero leerte pronto!
          </p>
        </div>

        {/* Formulario */}
        <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            className={styles.textarea}
            rows="6"
            required
          ></textarea>

          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? (
              <>
                <span className={styles.spinner}></span> Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </button>
        </form>

        {/* ✅ Mensaje de confirmación */}
        {isSent && (
          <p className={styles.confirmationMessage}>
            ¡Mensaje enviado correctamente!
          </p>
        )}

      </section>

      {/* Footer de contacto */}
      <section className={styles.contactFooter}>
        <div className={styles.contactExtras}>
          {/* Avatar */}
          <div className={styles.avatarContainer}>
            <img
              src= {avatarImg}
              alt="Avatar de Nicolás"
              className={styles.avatar}
            />
            <p>¡Gracias por visitar!</p>
          </div>

          {/* Mapa */}
          <div className={styles.mapContainer}>
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31123.7437366798!2d-57.96745570433566!3d-34.919482716820255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748020240273!5m2!1ses!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Íconos */}
          <div className={styles.socialIcons}>
            <a href="mailto:nico.fernandezcastillo@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <FaEnvelope />
            </a>
            <a href="www.linkedin.com/in/nicolás-fernández-castillo/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Nico4400" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://wa.me/542215651273" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;




  