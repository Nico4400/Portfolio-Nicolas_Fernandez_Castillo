import React from 'react'
import styles from './styles.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <a href="https://github.com/Nico4400" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolás-fernández-castillo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:nico.fernandezcastillo@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className={styles.text}>
          © {new Date().getFullYear()} Fernández Castillo Nicolás. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer


