import styles from './Navbar.module.scss'
import Link from 'next/link'

const MenuSmall = () => {
  return (
    <ul className={styles.menuContainer}>
      <Link href="#" className={styles.item} as="style">
        Power Campaings
      </Link>
      <Link href="#" className={styles.item} as="style">
        Agents
      </Link>
      <Link href="#" className={styles.item} as="style">
        Pricing
      </Link>
      <Link href="#" className={styles.item} as="style">
        Sobre Nosotros
      </Link>
      <Link href="#" className={styles.lastItem} as="style">
        Chatear con Agente
      </Link>
    </ul>
  )
}

export default MenuSmall
