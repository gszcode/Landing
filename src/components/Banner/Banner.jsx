import Link from 'next/link'
import Image from 'next/image'
import banner01 from 'public/assets/banner-01.svg'
import banner02 from 'public/assets/banner-02.svg'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bannerText}>
        <h1 className={styles.bannerTitle}>
          CONOCÉ TODO EL PODER DE
          <br />
          <span className={styles.titleSpan}>UN MENSAJE</span>
        </h1>
        <p className={styles.bannerParagraph}>
          Aumentá la eficiencia y mejora la experiencia de tus clientes <br />{' '}
          con Notimation.
        </p>
        <Link href="#" className={styles.bannerBtn} as="style">
          Conocer más ↓
        </Link>
      </div>
      <div className={styles.bannerImg}>
        <span className={styles.bannerPreview}>Preview</span>
        <Image src={banner01} alt="Banner 1" className={styles.image01} />
        <Image src={banner02} alt="Banner 2" className={styles.image02} />
      </div>
    </section>
  )
}

export default Banner
