import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaBriefcase, FaGraduationCap, FaBullhorn, FaPlus, FaMinus, FaAtom } from 'react-icons/fa';


const experienceCategories = {
    "Trabajo": [
        {
            id: 1,
            organization: "Instituto de la Vivienda PBA - Subsecretaría de Planificación de Desarrollo Urbano y Vivienda.",
            logo: "/logos/pba.jpg",
            position: "Control Interno",
            period: "2021 - Actualidad",
            brief: "Control de planillas automatizadas para detectar errores en el manejo de los usuarios, optimizando la comunicación interna y externa.",
            descriptionPoints: [
                "Gestión integral de bases de datos de la Dirección, enfocada en la creación, administración y actualización para facilitar un acceso eficiente a información clave.",
                "Desarrollo y implementación de planillas automatizadas y herramientas personalizadas para optimizar el control documental, disminuyendo errores y aumentando la eficiencia operativa.",
                "Optimización de la comunicación interna y externa de la Dirección para una colaboración más eficiente.",
                "Supervisión y control de la planificación presupuestaria anual, asegurando una gestión financiera efectiva.",
                "Elaboración y supervisión de cómputos y presupuestos para garantizar la integridad financiera de los proyectos.",
                "Generación de informes diarios para los expedientes devengados o pagados, proporcionando datos detallados y precisos.",
                "Asesoramiento y asistencia a municipios en la presentación de rendiciones de Anticipos Financieros, asegurando el cumplimiento de requisitos formales.",
                "Confección y seguimiento de expedientes de pago, impulsando su avance y manteniendo la calidad documental.",
                "Elaboración de informes semanales, resaltando aspectos cruciales y proporcionando análisis fundamentados para respaldar la toma de decisiones.",
            ]
        },
        {
            id: 2,
            organization: "Ministerio de Infraestructura - Subsecretaría de Planificación y Evaluación de Gestión, Provincia de Buenos Aires.",
            logo: "/logos/pba.jpg",
            position: "Coordinador - Dirección de Coordinación y Monitoreo Interjurisdiccional - (Certificaciones)",
            period: "2020 - Oct. 2021",
            brief: "Supervisión y coordinación de la certificación de convenios, control de preventivos y desarrollo de herramientas para agilizar procesos.",
            descriptionPoints: [
                "Supervisión y control de los preventivos de obra para asegurar una planificación presupuestaria anual efectiva.",
                "Control de cómputos y presupuestos para garantizar la integridad financiera de los proyectos.",
                "Generación de reportes diarios para los expedientes devengados o pagados, proporcionando información detallada y precisa.",
                "Asesoramiento y asistencia a municipios en la presentación de rendiciones y certificados de avance de obra, asegurando el cumplimiento de requisitos formales.",
                "Coordinación y monitoreo de la certificación de convenios entre el Ministerio y municipios, supervisando el desarrollo de las obras de infraestructura.",
                "Confección de expedientes de pago, impulsando su avance y asegurando la calidad documental.",
                "Desarrollo de herramientas personalizadas para agilizar el control documental, reduciendo errores y mejorando la eficiencia del proceso.",
                "Creación, gestión y actualización de bases de datos de la Dirección, facilitando el acceso a información clave.",
                "Elaboración de reportes semanales, destacando aspectos relevantes y proporcionando análisis para la toma de decisiones.",
            ]
        },
        {
            id: 3,
            organization: "Ministerio de Infraestructura - Subsecretaría de Planificación y Evaluación de Gestión, Provincia de Buenos Aires.",
            logo: "/logos/pba.jpg",
            position: "Consultor de Sistemas SAP",
            period: "2018 - 2020",
            brief: "Lideré la optimización de procesos y la implementación del módulo financiero en SAP ERP, impactando la eficiencia de la certificación de obra pública.",
            descriptionPoints: [
                "Seguimiento y control de obras a través del sistema SAP ERP.",
                "Relevamiento y análisis de pliegos y contratos técnicos para la carga en SAP.",
                "Asistencia y capacitación a áreas técnicas en el uso de transacciones SAP (MM, PS, PM, FI, LSMW, Hana).",
                "Desarrollo de manuales de gestión y certificación para capacitación de usuarios.",
                "Participación clave en el análisis y gestión para la implementación del Módulo Financiero de SAP ERP.",
            ]
        },
        {
            id: 4,
            organization: "Big Sky Resort, Montana (MT).",
            logo: "/logos/BigSky.png",
            position: "Lift Operator (ascensorista de telesquíes)",
            period: "Dic. 2011 - Mar. 2012",
            brief: "Responsable de la operación segura y eficiente de telesquíes, garantizando la seguridad de los usuarios y el mantenimiento operativo.",
            descriptionPoints: [
                "Responsable de la operación segura y eficiente de los elevadores de sillas de montaña y sus usuarios.",
                "Mantenimiento de todos los aspectos operativos de la elevación asignada.",
                "Asistencia a los usuarios y manejo de situaciones en un entorno de esquí de alta demanda."
            ]
        },
    ],
    "Educación": [
        {
            id: 7,
            organization: "CoderHouse",
            logo: "/logos/CoderHouse.png",
            position: "Desarrollo Full Stack",
            period: "2023 - 2024",
            brief: "Formación intensiva en desarrollo web front-end y back-end, con enfoque en tecnologías modernas y metodologías ágiles.",
            descriptionPoints: [
                "Dominio de tecnologías Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Vite.",
                "Desarrollo de Back-End con Node.js y Express.js para APIs RESTful.",
                "Gestión de bases de datos SQL y NoSQL (MongoDB).",
                "Manejo de Git y GitHub para control de versiones y colaboración.",
                "Aplicación de principios de diseño UX/UI en el desarrollo de interfaces de usuario.",
                "Prácticas en metodologías ágiles y desarrollo de proyectos end-to-end."
            ]
        },
        {
            id: 5,
            organization: "Universidad Nacional de la Plata - Facultad de Ingeniería. (UNLP)",
            logo: "/logos/unlp_ing2.png",
            position: "Ingeniero Industrial",
            period: "2009 - 2019",
            brief: "Formación integral en optimización de procesos, gestión de proyectos y toma de decisiones, con una base sólida en análisis cuantitativo para la resolución de problemas complejos.",
            descriptionPoints: [
                "Título de Ingeniero Industrial (R.M. 3620/17) otorgado por la Universidad Nacional de La Plata, Facultad de Ingeniería.",
                "Sólida formación en Fluidodinámica, Mecánica, Estructuras, Termodinámica y Materiales.",
                "Profundos conocimientos en Programación, Algoritmos y Estructuras de Datos, sentando bases para el desarrollo de software.",
                "Desarrollo de habilidades en Matemáticas (A, B, C), Física (I, II, III B), Estadística y Probabilidades para análisis cuantitativo.",
                "Especialización en áreas de Producción (I, II, III), Administración General y Sistemas Administrativos, Administración Financiera, Comercialización y Dirección General.",
                "Formulación y Evaluación de Proyectos, Higiene y Seguridad en el Trabajo, e Ingeniería Legal.",
                "Práctica Profesional Supervisada y Trabajo Final que integraron conocimientos teóricos y prácticos.",
                "Curso de Idioma: Inglés (Aprobado)."
            ]
        },
        {
            id: 6,
            organization: "Instituto Cultural Itálico Leonardo DaVinci La Plata.",
            logo: "/logos/italiana.png",
            position: "Bachiller en Ciencias Naturales",
            period: "2006 - 2008",
            brief: "Obtención del título de Bachiller en Ciencias Naturales con un promedio general destacado, desarrollando una sólida base en ciencias exactas y habilidades de investigación.",
            descriptionPoints: [
                "Estudios Internacionales: Licenza Media / Esame di Stato, Maturitá.",
                "Título de Bachiller, modalidad CIENCIAS NATURALES.",
                "Desarrollo de conocimientos en áreas fundamentales como Matemática, Física, Química y Biología.",
                "Participación en Proyectos de Investigación (2° año) e Historia, Civismo y Filosofía (3° año), fomentando el pensamiento crítico y la capacidad analítica.",
                "Estudios en Lengua Extranjera: Inglés e Italiano.",
            ]
        },
    ],
    "Emprendimiento": [
        {
            id: 8,
            organization: "Nutrimas (anteriormente CANEVIANDAS)",
            logo: "/logos/logo_nutrimas.png",
            position: "Co-fundador / Analista de Negocio",
            period: "2016 - Actualidad",
            brief: "Lideré el estudio de viabilidad y la estrategia comercial de un microemprendimiento de alimentación, aplicando principios de ingeniería y ciencia de datos.",
            descriptionPoints: [
                "Análisis de los 5 mercados (consumidor, proveedor, competidor, sustitutos y distribuidor) para evaluación del proyecto.",
                "Desarrollo de estrategia comercial para atracción y fidelización de clientes.",
                "Estudio técnico para definir el tamaño de lote y tiempos de producción.",
                "Elaboración de flujo de fondos, cálculo de capital de trabajo y costos fijos/variables.",
                "Consideraciones ambientales, legales y organizacionales del negocio.",
                "Creación de Pagina Web",
            ],
            link: "https://nico4400.github.io/Nutrimas/",
            linkText: "Nutrimas Web"
        },
    ]
};

const Experience = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [modalExperience, setModalExperience] = useState(null);

    const toggleCategoryExpand = (categoryName) => {
        setExpandedCategory(prevCategory => prevCategory === categoryName ? null : categoryName);
    };

    const openModal = (experience) => {
        setModalExperience(experience);
    };

    const closeModal = () => {
        setModalExperience(null);
    };

    const getCategoryIcon = (categoryType) => {
        switch (categoryType) {
            case "Trabajo":
                return <FaBriefcase />;
            case "Educación":
                return <FaGraduationCap />;
            case "Emprendimiento":
                return <FaBullhorn />;
            default:
                return <FaCodeBranch />;
        }
    };

    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section className={styles.experienceSection} aria-labelledby="experience-section-title">
            <h2 id="experience-section-title" className={styles.sectionTitle}>Mi Trayectoria</h2>
            <p className={styles.sectionSubtitle}>
                Un recorrido visual por mi evolución profesional, académica y emprendedora, presentado como un flujo de progreso.
            </p>

            <div className={styles.gitFlowContainer}>
                {/* Nodo Raíz: "Mi Trayectoria" */}
                <div className={styles.rootNode}>
                    <div className={styles.nodeContent}>
                        <FaAtom className={styles.rootNodeIcon} aria-hidden="true" />
                        <h3 className={styles.rootNodeTitle}>Mi Trayectoria</h3>
                    </div>
                </div>

                {/* Nodos Padre (Categorías): Trabajo, Educación, Emprendimiento */}
                <div className={styles.categoryNodesContainer}>
                    {Object.keys(experienceCategories).map((categoryName) => (
                        <div
                            key={categoryName}
                            className={`${styles.categoryNode} ${expandedCategory === categoryName ? styles.categoryNodeExpanded : ''}`}
                            onClick={() => toggleCategoryExpand(categoryName)}
                            role="button"
                            tabIndex="0"
                            aria-expanded={expandedCategory === categoryName}
                            aria-controls={`category-details-${categoryName}`}
                        >
                            <div className={styles.nodeContent}>
                                <span className={styles.categoryIcon} aria-hidden="true">{getCategoryIcon(categoryName)}</span>
                                <h4 className={styles.categoryTitle}>{categoryName}</h4>
                                <span className={styles.categoryToggleIcon}>
                                    {expandedCategory === categoryName ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            {/* Contenedor para los Nodos Hijos de esta categoría */}
                            <div
                                id={`category-details-${categoryName}`}
                                className={`${styles.categoryDetailsContainer} ${expandedCategory === categoryName ? styles.expanded : ''}`}
                            >
                                {experienceCategories[categoryName].map((experience) => (
                                    <div
                                        key={experience.id}
                                        className={styles.experienceNode}
                                        onClick={(e) => { e.stopPropagation(); openModal(experience); }}
                                        role="button"
                                        tabIndex="0"
                                        aria-label={`Ver detalles de ${experience.position} en ${experience.organization}`}
                                    >
                                        <div className={styles.nodeContent}>
                                            {experience.logo ? (
                                                <img src={`${baseUrl}${experience.logo}`} alt={`Logo de ${experience.organization}`} className={styles.experienceLogo} />
                                            ) : (
                                                <span className={styles.experienceGenericIcon}>{getCategoryIcon(experience.type)}</span>
                                            )}
                                            <p className={styles.experiencePosition}>{experience.position}</p>
                                            <p className={styles.experiencePeriod}>{experience.period}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para detalles de experiencia */}
            {modalExperience && (
                <div className={styles.modalBackdrop} onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="experience-modal-title">
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 id="experience-modal-title" className={styles.modalTitle}>{modalExperience.position}</h3>
                            <button onClick={closeModal} className={styles.closeModalButton} aria-label="Cerrar detalles de experiencia">✕</button>
                        </div>
                        {/* Aquí es donde se mostrará la imagen, Organización, Período, Resumen y Detalle */}
                        {modalExperience.logo && (
                            <div className={styles.modalImageContainer}>
                                <img src={`${baseUrl}${modalExperience.logo}`} alt={`Logo de ${modalExperience.organization}`} 
                                className={styles.modalLogo} />
                            </div>
                        )}
                        <p className={styles.modalInfoLabel}><strong>Organización:</strong> <span className={styles.modalInfoValue}>{modalExperience.organization}</span></p>
                        <p className={styles.modalInfoLabel}><strong>Período:</strong> <span className={styles.modalInfoValue}>{modalExperience.period}</span></p>
                        <p className={styles.modalInfoLabel}><strong>Resumen:</strong></p>
                        <p className={styles.modalBrief}>{modalExperience.brief}</p>
                        
                        {modalExperience.descriptionPoints && modalExperience.descriptionPoints.length > 0 && (
                            <>
                                <p className={styles.modalInfoLabel}><strong>Detalle:</strong></p>
                                <ul className={styles.modalDetailsList}>
                                    {modalExperience.descriptionPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {modalExperience.link && (
                            <div className={styles.modalLinkContainer}>
                                <a
                                    href={modalExperience.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.modalLink}
                                    title={`Ir a la página web de ${modalExperience.organization}`}
                                >
                                    {modalExperience.linkText || 'Visitar Enlace'}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '8px', verticalAlign: 'middle' }}>
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V4.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;