import styles from './Form.module.scss'

const Form = () => {
  return (
    <section className={styles.container}>
      <p className={styles.paragraph}>
        Completa el formulario y solicita una prueba gratuita. <br /> Potencia
        tu comunicación con <strong>Notimation.</strong>
      </p>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Nombre Completo</label>
          <input className={styles.input} placeholder="John Doe" />
        </div>
        <div className={styles.inputContainer}>
          <label>Teléfono</label>
          <input className={styles.input} placeholder="011 123 456 789" />
        </div>
        <div className={styles.inputContainer}>
          <label>Correo Electrónico</label>
          <input className={styles.input} placeholder="mail@ejemplo.com" />
        </div>
        <button className={styles.btn}>Solicita una prueba gratuita</button>
      </form>
    </section>
  )
}

export default Form
