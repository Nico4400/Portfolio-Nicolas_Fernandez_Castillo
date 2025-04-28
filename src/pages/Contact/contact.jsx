import styles from './styles.module.css'

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contacto</h2>

      <h4 className={styles.subtitle}>Trabajemos juntos</h4>

      <h3>Asesoría para Empresas y Clientes Particulares</h3>

      <p className={styles.contactText}>
        Si estás buscando llevar tu proyecto o empresa al siguiente nivel con soluciones digitales eficientes y a medida, ¡estoy para ayudarte!
        <br /><br />
        Soy Nicolás Fernández Castillo, ingeniero industrial con fuerte orientación en tecnología, programación y ciencia de datos. Me especializo en desarrollar herramientas y soluciones que optimicen procesos, faciliten la toma de decisiones y generen valor real, ya sea para equipos de trabajo, negocios o proyectos personales.
        <br /><br />
        Estoy abierto a colaborar con empresas, emprendedores o particulares que busquen innovación, análisis y claridad en sus procesos. Ya sea que necesites asesoramiento, desarrollo a medida o simplemente quieras compartir una idea, te invito a escribirme.
      </p>

      <h3 className={styles.formHeader}>Escríbeme</h3>

      <p className={styles.contactText}>
        ¡No dudes en ponerte en contacto! Si tenés alguna pregunta o inquietud sobre mis servicios, completá el formulario y estaré encantado de ayudarte. ¡Espero leerte pronto!
      </p>

      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  )
}

export default Contact





  