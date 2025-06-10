import React, { useState, useEffect } from 'react'; // Importar useEffect
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import styles from './styles.module.css';
import logo from '../../assets/Logo.png';

// Componente auxiliar para NavLink con scroll
// Se le añadió un prop `onLinkClick` para cerrar el menú en móvil, ya que `closeMenu` es más específico
const ScrollNavLink = ({ to, children, className, onLinkClick }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        // Si ya estás en la misma ruta, haz scroll al inicio
        if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Si es una ruta diferente, navega
            navigate(to);
        }
        // Ejecuta la función para cerrar el menú si está definida
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <NavLink to={to} className={className} onClick={handleClick}>
            {children}
        </NavLink>
    );
};

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Funciones para manejar el estado del menú
    const toggleMenu = () => setMenuOpen(prev => !prev); // Usar función de actualización para evitar problemas de cierre asíncrono
    const closeMenu = () => setMenuOpen(false);

    // Efecto para escuchar clics fuera del menú (para cerrar el menú móvil)
    // y para deshabilitar el scroll del cuerpo cuando el menú está abierto
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Si el menú está abierto y el clic no fue dentro del menú ni en el botón de hamburguesa
            if (menuOpen && !event.target.closest(`.${styles.navList}`) && !event.target.closest(`.${styles.burger}`)) {
                closeMenu();
            }
        };

        const handleEscapeKey = (event) => {
            if (menuOpen && event.key === 'Escape') {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
            // Evitar scroll del body cuando el menú está abierto
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = ''; // Restaurar scroll
        }

        // Limpieza de event listeners
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        };
    }, [menuOpen]); // Depende de menuOpen para activarse/desactivarse


    // Definición de ítems de navegación (no cambian, solo reordenado para claridad)
    const navItems = [
        ['/', 'Inicio', <FaHome aria-hidden="true" />], // Añadido aria-hidden para íconos decorativos
        ['/about', 'Sobre mí', <FaUser aria-hidden="true" />],
        ['/projects', 'Proyectos', <FaProjectDiagram aria-hidden="true" />],
        ['/skills', 'Habilidades', <FaCode aria-hidden="true" />],
        ['/experience', 'Experiencia', <FaBriefcase aria-hidden="true" />],
        ['/contact', 'Contacto', <FaEnvelope aria-hidden="true" />],
    ];

    return (
        <>
            <nav className={styles.nav} aria-label="Main Navigation"> {/* Añadido aria-label */}
                <div className={styles.logo}>
                    {/* Alt text mejorado para logo */}
                    <ScrollNavLink to="/" className={styles.logoLink} onLinkClick={closeMenu}>
                        <img src={logo} alt="Logotipo de Nicolás Fernández Castillo" className={styles.logoImg} />
                    </ScrollNavLink>
                </div>

                <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ''}`} role="menu"> {/* role="menu" para accesibilidad */}
                    {navItems.map(([to, label, icon]) => (
                        <li key={to} role="menuitem"> {/* role="menuitem" para accesibilidad */}
                            <ScrollNavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : styles.link
                                }
                                onLinkClick={closeMenu} // Pasa closeMenu al ScrollNavLink
                            >
                                <span className={styles.icon} aria-hidden="true">{icon}</span> {/* aria-hidden aquí si el span es solo para el ícono */}
                                {label}
                            </ScrollNavLink>
                        </li>
                    ))}
                </ul>

                <button
                    className={`${styles.burger} ${menuOpen ? styles.open : ''}`} // Añadir clase 'open' para animar el icono
                    onClick={toggleMenu}
                    aria-expanded={menuOpen} // Estado de accesibilidad
                    aria-controls="main-navigation-menu" // ID del menú que controla
                    aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"} // Etiqueta de accesibilidad
                >
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>
            </nav>
            {/* Opcional: Overlay para cerrar menú móvil (solo si el navList no ocupa todo el ancho) */}
            {menuOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}
            <div style={{ height: '80px' }}></div> {/* Placeholder para el espacio fijo de la nav */}
        </>
    );
};

export default NavBar;