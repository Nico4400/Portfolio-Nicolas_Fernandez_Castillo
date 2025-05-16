import styles from './styles.module.css'
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';


const About = () => {
  // 🧠 Estado y enlaces del CV
  const [cvSelected, setCvSelected] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;
  const cvLinks = {
    es: `${baseUrl}CV - Nicolas Fernadez Castillo.pdf`,
    en: `${baseUrl}CV - Nicolas Fernadez Castillo - Eng.pdf`,
    it: `${baseUrl}CV - Nicolas Fernadez Castillo - It.pdf`,
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre mí</h2>

        <p className={styles.highlight}>Soy Nicolás Fernández Castillo</p>

        <p className={styles.intro}>
          Ingeniero industrial con orientación en tecnología, programación y ciencia de datos. Me dedico a crear soluciones digitales que transformen procesos, impulsen la eficiencia y generen valor real para empresas y personas.
        </p>

        <h3 className={styles.subtitle}>Mi misión</h3>
        <p className={styles.body}>
          Ayudar a equipos, emprendedores y empresas a integrar herramientas tecnológicas de forma inteligente y a medida. Mi enfoque está en simplificar lo complejo, automatizar tareas repetitivas y generar información clara para una mejor toma de decisiones.
        </p>

        <h3 className={styles.subtitle}>Mi visión</h3>
        <p className={styles.body}>
          Creo en el poder de la tecnología como motor de cambio. Aspiro a que más personas y organizaciones puedan acceder a soluciones digitales simples, eficientes y sostenibles que potencien sus ideas y sus negocios.
        </p>

        <h3 className={styles.subtitle}>Mi enfoque</h3>
        <p className={styles.body}>
          Soy una persona analítica, práctica y autodidacta, con fuerte compromiso con el trabajo en equipo, el aprendizaje continuo y la innovación responsable. Me gusta acompañar procesos, aportar claridad técnica y construir soluciones con impacto real.
        </p>

        <p className={styles.outro}>
          Si compartís esta visión o estás en búsqueda de colaboración para tu proyecto, no dudes en contactarme. Estoy siempre abierto a nuevos desafíos.
        </p>

        {/* Sección final con CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>Hablemos</h3>
          <p className={styles.ctaText}>
            Seas una persona o una empresa, estoy seguro de que puedo ayudarte a conseguir tus objetivos. Hacé clic abajo y enterate cómo.
          </p>
          <a href="#contact" className={styles.ctaButton}>Saber más</a>
        </div>

        {/* CV */}
        <div className={styles.cvSection}>
          <h3 className={styles.cvTitle}>Currículum Vitae</h3>
          <p className={styles.cvText}>
            Podés ver o descargar mi CV en el idioma que prefieras.
          </p>

          <div className={styles.cvGrid}>
            {['es', 'en', 'it'].map((lang) => (
              <div key={lang} className={styles.cvCard}>
                <div className={styles.cvThumbnail} onClick={() => setCvSelected(lang)}>
                  <img
                    src={`${baseUrl}CV - Nicolas Fernadez Castillo.jpg`}
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
                  <button
                    className={styles.cvActionButton}
                    onClick={() => setCvSelected(lang)}
                  >
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

      </div>
    </section>
  )
}

export default About



  