import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaBriefcase, FaGraduationCap, FaBullhorn, FaPlus, FaMinus, FaAtom, FaCodeBranch } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from 'react-icons/di';


const experienceCategories = {
    "Trabajo": [
        {
            id: 1,
            organization: "Instituto de la Vivienda PBA - Subsecretaría de Planificación de Desarrollo Urbano y Vivienda.",
            logos: [
                { src: "/logos/pba.jpg", alt: "Logo de la Provincia de Buenos Aires" },
                { src: "/logos/IVBA2.jpg", alt: "Logo de Instituto de la Vivienda" },
            ],
            position: "Analista de Optimización y Control de Gestión",
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
            logos: [
                { src: "/logos/pba.jpg", alt: "Logo de la Provincia de Buenos Aires" },
                { src: "/logos/Minfra.png", alt: "Logo de Ministerio de Infraestructura" },

            ],
            position: "Coordinador de Dirección de Certificaciones",
            period: "2020 - 2021",
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
            logos: [
                { src: "/logos/pba.jpg", alt: "Logo de la Provincia de Buenos Aires" },
                { src: "/logos/Minfra.png", alt: "Logo de Ministerio de Infraestructura" },

            ],
            position: "Consultor de Sistemas SAP",
            period: "2018 - 2020",
            brief: "Lideré la optimización de procesos y la implementación del módulo financiero en SAP ERP, impactando la eficiencia de la certificación de obra pública.",
            descriptionPoints: [
                "Seguimiento y control de obras a través del sistema SAP ERP.",
                "Carga en las distintas transacciones del sistema SAP ERP",
                "Relevamiento y análisis de pliegos y contratos técnicos para la carga en SAP.",
                "Asistencia y capacitación a áreas técnicas en el uso de transacciones SAP (MM, PS, PM, FI, LSMW, Hana).",
                "Desarrollo de manuales de gestión y certificación para capacitación de usuarios.",
                "Participación clave en el análisis y gestión para la implementación del Módulo Financiero de SAP ERP.",
            ]
        },
        {
            id: 4,
            organization: "Big Sky Resort, Montana (MT).",
            logos: [{ src: "/logos/BigSky1.png", alt: "Logo de Big Sky Resort" }],
            position: "Lift Operator (Operador de telesquíes)",
            period: "2011 - 2012",
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
            logos: [
                { src: "/logos/CoderHouse.png", alt: "Logo de CoderHouse" },
                { icon: <DiHtml5 />, label: "HTML5" },
                { icon: <DiCss3 />, label: "CSS3" },
                { icon: <DiJavascript1 />, label: "JavaScript" },
                { icon: <DiReact />, label: "React.js" },
                { icon: <DiNodejs />, label: "Node.js" },
                { icon: <DiMongodb />, label: "MongoDB" },
                { icon: <DiGit />, label: "Git" },
            ],
            position: "Desarrollo Full Stack",
            period: "2023 - 2024",
            brief: "Formación intensiva en desarrollo web front-end y back-end, con enfoque en tecnologías modernas y metodologías ágiles.",
            descriptionPoints: [
                "Dominio de tecnologías Front-End: HTML, CSS, JavaScript, React.js, Vite.",
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
            logos: [{ src: "/logos/unlp_ing2.png", alt: "Logo de la UNLP" }],
            position: "Ingeniero Industrial",
            period: "2009 - 2019",
            brief: "Formación integral en optimización de procesos, gestión de proyectos y toma de decisiones, con una base sólida en análisis cuantitativo para la resolución de problemas complejos.",
            descriptionPoints: [
                "Título de Ingeniero Industrial (R.M. 3620/17) otorgado por la Universidad Nacional de La Plata, Facultad de Ingeniería.",
                "Sólida formación en Fluidodinámica, Mecánica, Estructuras, Termodinámica y Materiales.",
                "Profundos conocimientos en Programación, Algoritmos y Estructuras de Datos, sentando bases para el desarrollo de software.",
                "Desarrollo de habilidades en Matemáticas, Física, Estadística y Probabilidades para análisis cuantitativo.",
                "Especialización en áreas de Producción, Administración General y Sistemas Administrativos, Administración Financiera, Comercialización y Dirección General.",
                "Formulación y Evaluación de Proyectos, Higiene y Seguridad en el Trabajo, e Ingeniería Legal.",
                "Práctica Profesional Supervisada y Trabajo Final que integraron conocimientos teóricos y prácticos.",
            ]
        },
        {
            id: 6,
            organization: "Instituto Cultural Itálico Leonardo DaVinci La Plata.",
            logos: [{ src: "/logos/italiana.png", alt: "Logo del Instituto Leonardo DaVinci" }],
            position: "Bachiller en Ciencias Naturales",
            period: "2006 - 2008",
            brief: "Obtención del título de Bachiller en Ciencias Naturales, desarrollando una sólida base en ciencias exactas y habilidades de investigación.",
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
            organization: "Nutrimas (Caneviandas y Feliviandas)",
            logos: [
                { src: "/logos/logo_nutrimas.png", alt: "Logo de Nutrimas" },
                { src: "/logos/foto_caneviandas.jpg", alt: "Logo de Caneviandas" },
                { src: "/logos/foto_feliviandas.jpg", alt: "Logo de Feliviandas" }
            ],
            position: "Desarrollador y Analista de Negocio",
            period: "2016 - Actualidad",
            brief: "Lideré el estudio de viabilidad y la estrategia comercial de un microemprendimiento de alimentación de las mascotas, aplicando principios de nutrición, ingeniería y ciencia de datos.",
            descriptionPoints: [
                "Análisis de las recetas nutricionales acorde a la alimentación de la mascotas(BARF)",
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
                return <FaCodeBranch />; // Icono por defecto, si la categoría no coincide
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
                    {/* Contenedor para el título que estará por encima del icono */}
                    <div className={styles.rootNodeTitleContainer}> 
                        <h3 className={styles.rootNodeTitle}>Mi Trayectoria</h3>
                    </div>
                    {/* Contenedor para el icono FaAtom (el círculo) */}
                    <div className={styles.rootNodeIconContainer}>
                        <FaAtom className={styles.rootNodeIcon} aria-hidden="true" />
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
                                            {experience.logos && experience.logos.length > 0 && experience.logos[0].src ? (
                                                // Muestra el primer logo del array para el nodo de la línea de tiempo
                                                <img src={`${baseUrl}${experience.logos[0].src}`} alt={`Logo de ${experience.organization}`} className={styles.experienceLogo} />
                                            ) : (
                                                // Fallback al icono genérico si no hay logos o el primer logo no tiene src
                                                <span className={styles.experienceGenericIcon}>{getCategoryIcon(experience.type)}</span>
                                            )}
                                        <div className={styles.experienceTextContainer}>
                                            <p className={styles.experiencePosition}>{experience.position}</p>
                                            <p className={styles.experiencePeriod}>{experience.period}</p>
                                                {/* Icono + para indicar expansión */}
                                            <span className={styles.expandHintIcon} aria-hidden="true">
                                                <FaPlus />
                                            </span>
                                        </div>
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
                        {/* Contenido del cuerpo del modal con imagen y etiquetas */}
                        <div className={styles.modalBodyContent}>
                            {/* Muestra MÚLTIPLES LOGOS en el modal */}
                        {modalExperience.logos && modalExperience.logos.length > 0 && (
                                <div className={styles.modalLogosContainer}>
                                    {modalExperience.logos.map((logoItem, idx) => (
                                        <div key={idx} className={styles.modalImageContainer}>
                                            {logoItem.src ? ( // Si el objeto tiene una propiedad 'src'
                                                <img
                                                    src={`${baseUrl}${logoItem.src}`}
                                                    alt={logoItem.alt || `Logo de ${modalExperience.organization}`}
                                                    className={styles.modalLogo}
                                                />
                                            ) : logoItem.icon ? ( // Si el objeto tiene una propiedad 'icon'
                                                <span className={styles.modalTechIcon} aria-label={logoItem.label || "Icono de tecnología"}>
                                                    {logoItem.icon}
                                                </span>
                                            ) : null}
                                            {logoItem.label && <span className={styles.modalTechIconLabel}>{logoItem.label}</span>} {/* Opcional: mostrar el label debajo del icono */}
                                        </div>
                                    ))}
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
                </div>
            )}
        </section>
    );
};

export default Experience;