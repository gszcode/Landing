'use client'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/assets/logo.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SmallMenu from './SmallMenu'
import LargeMenu from './LargeMenu'

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
          <Image src={logo} alt="Logo" className={styles.image} as="style" />
        </Link>
      </motion.div>
      {/* Large Menu */}
      <LargeMenu />

      {/* Small Menu */}
      <SmallMenu handleClick={handleClick} btn={btn} />
    </nav>
  )
}

export default Navbar
