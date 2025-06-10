import React from 'react';
import styles from './styles.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    // Obtener el año actual dinámicamente
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} aria-label="Información de pie de página y enlaces sociales">
            <div className={styles.container}>
                <div className={styles.icons} role="contentinfo" aria-label="Enlaces a redes sociales y contacto">
                    <a
                        href="https://github.com/Nico4400"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil de GitHub de Nicolás Fernández Castillo"
                        aria-label="Ir al perfil de GitHub"
                    >
                        <FaGithub aria-hidden="true" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nicolás-fernández-castillo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Perfil de LinkedIn de Nicolás Fernández Castillo"
                        aria-label="Ir al perfil de LinkedIn"
                    >
                        <FaLinkedin aria-hidden="true" />
                    </a>
                    <a
                        href="mailto:nico.fernandezcastillo@gmail.com"
                        title="Enviar correo electrónico a Nicolás Fernández Castillo"
                        aria-label="Enviar correo electrónico"
                    >
                        <FaEnvelope aria-hidden="true" />
                    </a>
                    <a
                        href="https://wa.me/542215651273"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Enviar mensaje por WhatsApp a Nicolás Fernández Castillo"
                        aria-label="Enviar mensaje por WhatsApp"
                    >
                        <FaWhatsapp aria-hidden="true" />
                    </a>
                </div>
                <p className={styles.text}>
                    © {currentYear} Fernández Castillo Nicolás. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

