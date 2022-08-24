import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import img from '../../assets/TuneYards_2.jpg'

function Header() {

  const activeStyle = {
    textDecoration: "underline"
  };

  function activateStyle({isActive}){
    return (isActive ? activeStyle : undefined)
  }

  return (
    <div className={styles.header}>
      <img src={img} alt="Merril Garbus" className={styles.img} />
      <h1 className={styles.h1}>tUnE-yArDs</h1>
      <p className={styles.p}> American, Oakland, California–based music project of Merrill Garbus and Nate Brenner</p>
      <NavLink to="/" style={activateStyle}>All Songs</NavLink>
      <NavLink to="albums" style={activateStyle}>Albums</NavLink>
      {/* <NavLink to="about" style={activateStyle}>About</NavLink> */}
      <br />
    </div>
  )
}

export default Header
