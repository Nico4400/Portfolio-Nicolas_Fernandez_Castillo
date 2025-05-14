import styles from './styles.module.css'
import { useState } from 'react';


const About = () => {
  // 🧠 Estado y enlaces del CV
  const [cvSelected, setCvSelected] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;
  const cvLinks = {
    es: `${baseUrl}CV - Nicolas Fernadez Castillo.pdf`,
    en: `${baseUrl}CV - Nicolas Fernadez Castillo - Eng.pdf`,
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

        <div className={styles.cvSection}>
          <h3 className={styles.cvTitle}>Currículum Vitae</h3>
          <p className={styles.cvText}>
            Podés ver o descargar mi CV en el idioma que prefieras.
          </p>

          <div className={styles.cvButtons}>
            <button onClick={() => setCvSelected('es')} className={styles.cvButton}>
              Ver en Español
            </button>
            <button onClick={() => setCvSelected('en')} className={styles.cvButton}>
              Ver en Inglés
            </button>
          </div>

          {cvSelected && (
            <div className={styles.cvPreview}>
              <div className={styles.cvHeader}>
                <p className={styles.cvFileName}>
                  {cvSelected === 'es' ? 'CV - Español' : 'CV - Inglés'}
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
          )}
        </div>

      </div>
    </section>
  )
}

export default About



  