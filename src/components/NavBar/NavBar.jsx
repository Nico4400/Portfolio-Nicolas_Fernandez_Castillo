import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import styles from './styles.module.css'
import logo from '../../assets/Logo.png'

const ScrollNavLink = ({ to, children, className, closeMenu }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate(to)
    }
    closeMenu()
  }

  return (
    <NavLink to={to} className={className} onClick={handleClick}>
      {children}
    </NavLink>
  )
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    ['/', 'Inicio', <FaHome />],
    ['/about', 'Sobre mí', <FaUser />],
    ['/projects', 'Proyectos', <FaProjectDiagram />],
    ['/skills', 'Habilidades', <FaCode />],
    ['/experience', 'Experiencia', <FaBriefcase />],
    ['/contact', 'Contacto', <FaEnvelope />],
  ]

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <ScrollNavLink to="/" className={styles.logoLink} closeMenu={closeMenu}>
            <img src={logo} alt="Logo" className={styles.logoImg} />
          </ScrollNavLink>
        </div>

        <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ''}`}>
          {navItems.map(([to, label, icon]) => (
            <li key={to}>
              <ScrollNavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                closeMenu={closeMenu}
              >
                <span className={styles.icon}>{icon}</span>
                {label}
              </ScrollNavLink>
            </li>
          ))}
        </ul>

        <div className={styles.burger} onClick={toggleMenu}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </div>
      </nav>
      <div style={{ height: '80px' }}></div>
    </>
  )
}

export default NavBar


