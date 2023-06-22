'use client'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/assets/logo.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import IconsMenu from '../IconsMenu'

const Navbar = () => {
  const [btn, setBtn] = useState(false)

  const handleClick = () => {
    setBtn((prev) => !prev)
  }

  return (
    <nav className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <Link href="/" as="style">
          <Image src={logo} alt="Logo" className={styles.image} priority />
        </Link>
      </motion.div>
      <ul className={styles.menuContainer}>
        <Link href="#" className={styles.item}>
          Power Campaings
        </Link>
        <Link href="#" className={styles.item}>
          Agents
        </Link>
        <Link href="#" className={styles.item}>
          Pricing
        </Link>
        <Link href="#" className={styles.item}>
          Sobre Nosotros
        </Link>
        <Link href="#" className={styles.lastItem}>
          Chatear con Agente
        </Link>
      </ul>
      <div className={styles.btnMenu} onClick={handleClick}>
        <IconsMenu btn={btn} />
      </div>
      <ul className={btn ? styles.menuSMContainer : styles.menuSMContainerNone}>
        <Link href="#" className={styles.item}>
          Power Campaings
        </Link>
        <Link href="#" className={styles.item}>
          Agents
        </Link>
        <Link href="#" className={styles.item}>
          Pricing
        </Link>
        <Link href="#" className={styles.item}>
          Sobre Nosotros
        </Link>
        <Link href="#" className={styles.lastItem}>
          Chatear con Agente
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
