import styles from './Header.module.css'
import img from '../../assets/TuneYards_2.jpg'

function Header() {

  return (
    <div className={styles.header}>
      <img src={img} alt="Merril Garbus" className={styles.img} />
      <h1 className={styles.h1}>tUnE-yArDs</h1>
      <p className={styles.p}> American, Oakland, California–based music project of Merrill Garbus and Nate Brenner</p>
    </div>
  )
}

export default Header
