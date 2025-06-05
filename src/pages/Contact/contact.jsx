import styles from './styles.module.css';
import avatarImg from '/Avatar01.png';
import heroBackground from '/fondo_contacto.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Mantenido por si lo usas en otro lugar
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react'; // Importado useEffect

const Contact = () => {
    // emailjs variables de entorno
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const formRef = useRef();
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null); // Nuevo estado para mensajes de error
    // Estados para la validación en tiempo real (opcional, podrías solo validar al submit si lo prefieres)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [validationErrors, setValidationErrors] = useState({});

    // Efecto para limpiar los mensajes de éxito/error después de un tiempo
    useEffect(() => {
        if (isSent) {
            const timer = setTimeout(() => setIsSent(false), 5000); // Mensaje de éxito desaparece en 5s
            return () => clearTimeout(timer);
        }
    }, [isSent]);

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => setErrorMessage(null), 7000); // Mensaje de error desaparece en 7s
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    // Manejo de cambios en los inputs para validación y control de estado
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Limpiar error específico al escribir
        if (validationErrors[name]) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // Función de validación cliente
    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = 'El nombre es obligatorio.';
        }
        if (!formData.email.trim()) {
            errors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Formato de correo electrónico inválido.';
        }
        if (!formData.message.trim()) {
            errors.message = 'El mensaje es obligatorio.';
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const sendEmail = async (e) => { // Uso de async/await para mejor manejo
        e.preventDefault();
        setIsSent(false); // Resetear estados de feedback
        setErrorMessage(null);
        setValidationErrors({}); // Limpiar errores de validación previos

        if (!validateForm()) {
            // Si la validación falla, no continuar con el envío
            setErrorMessage('Por favor, corrige los errores en el formulario.');
            return;
        }

        setIsLoading(true); // Activar spinner

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setIsSent(true);
            formRef.current.reset(); // Resetear formulario
            setFormData({ name: '', email: '', message: '' }); // Limpiar estado del formulario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setErrorMessage("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.");
        } finally {
            setIsLoading(false); // Ocultar spinner
        }
    };

    return (
        <div className={styles.contactContainer}>
            {/* Hero section */}
            <div className={styles.heroSection}>
                <img src={heroBackground} alt="Fondo profesional abstracto para la sección de contacto" className={styles.heroBackground} />

                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Hablemos</h1>
                        <h2 className={styles.heroSubtitle}>Contacto</h2>
                        <img src={avatarImg} alt="Avatar de Nicolás Fernández Castillo" className={styles.heroAvatar} />
                    </div>
                </div>
            </div>

            <div className={styles.divider} />

            {/* Presentación - Texto actualizado y condensado */}
            <section className={styles.presentationSection}>
                <div className={styles.presentationText}>
                    <h3>Asesoría Estratégica y Soluciones Digitales</h3> {/* Título más directo */}
                    <p>
                        Como <strong>Ingeniero Industrial y desarrollador de software</strong>, mi propósito es transformar ideas en soluciones digitales eficientes y a medida. Me especializo en optimizar procesos, facilitar la toma de decisiones y generar valor real mediante el desarrollo de herramientas tecnológicas innovadoras.
                    </p>
                    <p>
                        ¿Buscas llevar tu proyecto o empresa al siguiente nivel? Conectemos y exploremos cómo la tecnología puede impulsar tu crecimiento.
                    </p>
                </div>

                {/* Tarjetas */}
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <i className="fas fa-user" aria-hidden="true" />
                        <h4>Clientes Particulares</h4>
                        <p>Proyectos personales, automatización, análisis de datos y soluciones digitales a medida.</p>
                    </div>
                    <div className={styles.card}>
                        <i className="fas fa-building" aria-hidden="true" />
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
                        ¡No dudes en ponerte en contacto! Si tienes alguna pregunta o inquietud sobre mis servicios, completa el formulario y estaré encantado de ayudarte. ¡Espero leerte pronto!
                    </p>
                </div>

                {/* Formulario */}
                <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            className={`${styles.input} ${validationErrors.name ? styles.inputError : ''}`}
                            required
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={validationErrors.name ? "true" : "false"}
                            aria-describedby={validationErrors.name ? "name-error" : null}
                        />
                        {validationErrors.name && <span id="name-error" className={styles.errorText}>{validationErrors.name}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            className={`${styles.input} ${validationErrors.email ? styles.inputError : ''}`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={validationErrors.email ? "true" : "false"}
                            aria-describedby={validationErrors.email ? "email-error" : null}
                        />
                        {validationErrors.email && <span id="email-error" className={styles.errorText}>{validationErrors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <textarea
                            name="message"
                            placeholder="Escribe tu mensaje..."
                            className={`${styles.textarea} ${validationErrors.message ? styles.inputError : ''}`}
                            rows="6"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            aria-invalid={validationErrors.message ? "true" : "false"}
                            aria-describedby={validationErrors.message ? "message-error" : null}
                        ></textarea>
                        {validationErrors.message && <span id="message-error" className={styles.errorText}>{validationErrors.message}</span>}
                    </div>

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

                {/* Mensajes de feedback (éxito/error) */}
                {isSent && (
                    <p className={styles.confirmationMessage} role="status" aria-live="polite">
                        ¡Mensaje enviado correctamente!
                    </p>
                )}
                {errorMessage && (
                    <p className={styles.errorMessage} role="alert" aria-live="assertive">
                        {errorMessage}
                    </p>
                )}

            </section>

            {/* Footer de contacto */}
            <section className={styles.contactFooter}>
                <div className={styles.contactExtras}>
                    {/* Avatar */}
                    <div className={styles.avatarContainer}>
                        <img
                            src={avatarImg}
                            alt="Avatar de Nicolás Fernández Castillo"
                            className={styles.avatar}
                        />
                        <p>¡Gracias por visitar!</p>
                    </div>

                    {/* Mapa - ¡Importante: Reemplazar src por uno real de Google Maps Embed! */}
                    <div className={styles.mapContainer}>
                        <iframe
                            title="Ubicación de Nicolás Fernández Castillo en La Plata, Argentina"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104870.7303862215!2d-58.12564287812501!3d-34.922119300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952e61a6b0c2a5d3%3A0xc3f1a0e8d0a0b2f!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717504381397!5m2!1ses-419!2sar" 
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            aria-label="Mapa que muestra la ubicación de La Plata, Buenos Aires, Argentina"
                        ></iframe>
                    </div>

                    {/* Íconos sociales */}
                    <div className={styles.socialIcons}>
                        <a href="mailto:nico.fernandezcastillo@gmail.com" target="_blank" rel="noopener noreferrer" title="Enviar correo electrónico">
                            <FaEnvelope aria-label="Enviar correo electrónico" />
                        </a>
                        <a href="https://www.linkedin.com/in/nicolás-fernández-castillo/" target="_blank" rel="noopener noreferrer" title="Perfil de LinkedIn de Nicolás Fernández Castillo">
                            <FaLinkedin aria-label="Perfil de LinkedIn" />
                        </a>
                        <a href="https://github.com/Nico4400" target="_blank" rel="noopener noreferrer" title="Perfil de GitHub de Nicolás Fernández Castillo">
                            <FaGithub aria-label="Perfil de GitHub" />
                        </a>
                        <a href="https://wa.me/542215651273" target="_blank" rel="noopener noreferrer" title="Enviar mensaje por WhatsApp">
                            <FaWhatsapp aria-label="Enviar mensaje por WhatsApp" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;



  