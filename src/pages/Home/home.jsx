import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import avatarImg from '/Avatar01.png';

const sections = [
  {
    title: 'Sobre mí',
    description: 'Conocé mi perfil profesional, formación, valores y lo que me motiva como ingeniero industrial orientado a la tecnología.',
    link: '/about',
    image: avatarImg,
  },
  {
    title: 'Proyectos',
    description: 'Explorá algunos de mis proyectos más relevantes, tanto personales como colaborativos, con impacto real.',
    link: '/projects',
    image: 'https://source.unsplash.com/800x600/?coding,project',
  },
  {
    title: 'Habilidades',
    description: 'Descubrí las herramientas, tecnologías y lenguajes con los que trabajo día a día.',
    link: '/skills',
    image: 'https://source.unsplash.com/800x600/?technology,tools',
  },
  {
    title: 'Experiencia',
    description: 'Un recorrido por mi experiencia profesional y los roles que me ayudaron a crecer.',
    link: '/experience',
    image: 'https://source.unsplash.com/800x600/?office,career',
  },
  {
    title: 'Contacto',
    description: '¿Tenés una idea o necesitás ayuda? Estoy listo para escucharte y colaborar.',
    link: '/contact',
    image: 'https://source.unsplash.com/800x600/?contact,communication',
  },
];

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      
      {/* Sección de introducción */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          
          <header className={styles.textContent}>
            <h1 className={styles.title}>Nicolás Fernández Castillo</h1>
            <p className={styles.subtitle}>Bienvenido a mi portfolio.</p>
            <p className={styles.subtitleSmall}>Un espacio donde convergen la tecnología, la creatividad y la estrategia.</p>
            <p className={styles.introText}>
              Soy ingeniero industrial especializado en ciencia de datos y programación. 
              Me apasiona construir soluciones que combinan eficiencia, innovación y tecnología.
            </p>
          </header>

          <figure className={styles.imageContent}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
              alt="Foto de presentación de Nicolás Fernández Castillo"
              className={styles.introImage}
            />
          </figure>

        </div>
      </section>

      {/* Sección de tarjetas */}
      <section className={styles.cardList}>
        {sections.map((section) => (
          <article className={styles.card} key={section.title}>
            
            <figure className={styles.imageContainer}>
              <img
                src={section.image}
                alt={section.title}
                className={styles.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
                }}
              />
            </figure>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{section.title}</h2>
              <p className={styles.cardDescription}>{section.description}</p>
              <Link to={section.link} className={styles.cardButton}>Saber más</Link>
            </div>

          </article>
        ))}
      </section>

    </main>
  );
};

export default Home;




