import styles from './styles.module.css'
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { TbTargetArrow } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";


const About = () => {

  const cards = [
    {
      title: 'Mi misión',
      icon: <TbTargetArrow />,
      text: 'Crear soluciones tecnológicas intuitivas, escalables y sostenibles que generen impacto positivo, conectando personas, procesos y datos con eficiencia.',
    },
    {
      title: 'Mi visión',
      icon: <IoBulb />,
      text: 'Ser un referente en el desarrollo de productos digitales, combinando ingeniería, creatividad y propósito, construyendo un futuro mejor mediante la innovación.',
    },
    {
      title: 'Mi enfoque',
      icon: <LuBrain />,
      text: 'Me centro en comprender a fondo los desafíos antes de construir soluciones. Aplico pensamiento crítico, diseño centrado en el usuario y metodologías ágiles.',
    },
  ];


  // 🧠 Estado y enlaces del CV
  const [cvSelected, setCvSelected] = useState(null);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const handleCvView = (lang) => {
    if (isMobile) {
      window.open(cvLinks[lang], '_blank');
    } else {
      setCvSelected(lang);
    }
  };
  const baseUrl = import.meta.env.BASE_URL;
  const cvLinks = {
    es: `${baseUrl}CV-Nicolas_Fernandez_Castillo.pdf`,
    en: `${baseUrl}CV-Nicolas_Fernandez_Castillo-Eng.pdf`,
    it: `${baseUrl}CV-Nicolas_Fernandez_Castillo-It.pdf`,
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.introContainer}>
        <img src={`${baseUrl}ingeniero-de-software.png`} alt="Avatar" className={styles.avatar} />
        <div className={styles.introText}>
          <h2 className={styles.intro}>
            Hola Soy <span className={styles.highlight}>Nico</span>
          </h2>
          <h3 className={styles.intro}>
            Ingeniero industrial con orientación en tecnología, programación y ciencia de datos.
          </h3>
          <p className={styles.body}>
            Mi propósito es facilitar el cambio y la mejora continua a través de herramientas digitales con soluciones eficientes, innovadoras y sostenibles.
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.aboutGrid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.aboutCard}>
            <div className={styles.cardIcon}>{card.icon}</div>
            <h3 className={styles.subtitle}>{card.title}</h3>
            <p className={styles.body}>{card.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.cta}>
        <h3 className={styles.subtitle}>
          ¿Querés saber más o trabajar conmigo?
        </h3>
        <p className={styles.ctaDescription}>
          Si compartís esta visión o estás en búsqueda de colaboración para tu proyecto, no dudes en contactarme. Estoy siempre abierto a nuevos desafíos.
        </p>
      </div>

        {/* Sección final con CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>Hablemos</h3>
          <p className={styles.ctaText}>
            Seas una persona o una empresa, estoy seguro de que puedo ayudarte a conseguir tus objetivos. Hacé clic abajo y enterate cómo.
          </p>
          <a href="#contact" className={styles.ctaButton}>Saber más</a>
        </div>

      <div className={styles.divider} />

        {/* CV */}
        <div className={styles.cvSection}>
          <h3 className={styles.cvTitle}>Currículum Vitae</h3>
          <p className={styles.cvText}>
            Podés ver o descargar mi CV en el idioma que prefieras.
          </p>

          <div className={styles.cvGrid}>
            {['es', 'en', 'it'].map((lang) => (
              <div key={lang} className={styles.cvCard}>
                <div className={styles.cvThumbnail} onClick={() => handleCvView(lang)}>
                  <img
                    src={`${baseUrl}CV-Nicolas_Fernandez_Castillo.jpg`}
                    alt={`Miniatura CV`}
                    className={styles.cvImage}
                  />
                  <div className={styles.cvOverlay}>
                    {lang === 'es' && 'Español'}
                    {lang === 'en' && 'Inglés'}
                    {lang === 'it' && 'Italiano'}
                  </div>
                </div>

                <div className={styles.cvActions}>
                  <button className={styles.cvActionButton} onClick={() => handleCvView(lang)}>
                    Ver
                  </button>
                  <a
                    href={cvLinks[lang]}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cvActionButton}
                  >
                    <FiDownload size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {cvSelected && (
            <div className={styles.modalBackdrop} onClick={() => setCvSelected(null)}>
              <div
                className={styles.cvPreview}
                onClick={(e) => e.stopPropagation()} // para evitar que se cierre al hacer click dentro del modal
              >
                <div className={styles.cvHeader}>
                  <p className={styles.cvFileName}>
                    {cvSelected === 'es' ? 'CV - Español' : cvSelected === 'en' ? 'CV - Inglés' : 'CV - Italiano'}
                  </p>
                  <button onClick={() => setCvSelected(null)} className={styles.closeButton}>
                    ✕ Cerrar
                  </button>
                </div>
                <iframe
                  src={cvLinks[cvSelected]}
                  title="CV Preview"
                  className={styles.cvIframe}
                />
              </div>
            </div>
          )}
        </div>

      
    </section>
  )
}

export default About



  