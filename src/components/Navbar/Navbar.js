import React, { useContext } from 'react'
import styles from './Navbar.module.scss'
import { context } from '../../Context'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const { offset1, offset2, offset3, offset4} = useContext(context);

  const navigate = offset => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: offset
    })
  };

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
            <li className={styles.link} onClick={() => navigate(offset1)}>Home</li>
            <li className={styles.link} onClick={() => navigate(offset2)}>Apartments</li>
            <li className={styles.link} onClick={() => navigate(offset3)}>Location</li>
            <li className={styles.link} onClick={() => navigate(offset4)}>Availability</li>
            <li className={styles.author}>By: Kevin Chong</li>
        </ul>
    </div>
  )
}

export default Navbar