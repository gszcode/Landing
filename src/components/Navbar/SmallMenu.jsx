import styles from './Navbar.module.scss'
import IconsMenu from '../IconsMenu'
import Link from 'next/link'

const SmallMenu = ({ handleClick, btn }) => {
  return (
    <>
      <div className={styles.btnMenu} onClick={handleClick}>
        <IconsMenu btn={btn} />
      </div>
      <ul className={btn ? styles.menuSMContainer : styles.menuSMContainerNone}>
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
    </>
  )
}

export default SmallMenu
