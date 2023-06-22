'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Campaigns.module.scss'
import { icons } from '../../../dataIcon'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Campaigns = () => {
  return (
    <>
      <section className={styles.container}>
        <span className={styles.span}>new!</span>
        <h2 className={styles.title}>POWER CAMPAIGNS</h2>
        <motion.div
          className={styles.iconContainer}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {icons.map((icon) => (
            <motion.div key={icon.id} className={styles.icon} variants={item}>
              <Image width={50} height={50} src={icon.image} alt={icon.alt} />
              <p>{icon.p}</p>
            </motion.div>
          ))}
        </motion.div>
        <Link href="#" className={styles.btn}>
          Solicita una prueba
        </Link>
      </section>
      <Link href="#" className={styles.info}>
        Más información →
      </Link>
    </>
  )
}

export default Campaigns
