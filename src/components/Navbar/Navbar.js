import React, { useContext, useRef } from 'react'
import styles from './Navbar.module.scss'
import { context } from '../../Context'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const { sections, list} = useContext(context);
  const ul = useRef();

  const navigate = offset => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: offset
    })
  };

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list} ref={list}>
            <li className={styles.link} onClick={() => navigate(sections.current[0].offsetLeft)}>Home</li>
            <li className={styles.link} onClick={() => navigate(sections.current[2].offsetLeft)}>Apartments</li>
            <li className={styles.link} onClick={() => navigate(sections.current[3].offsetLeft)}>Location</li>
            <li className={styles.link} onClick={() => navigate(sections.current[7].offsetLeft)}>Availability</li>
            <li className={styles.author}>By: Kevin Chong</li>
        </ul>
    </div>
  )
}

export default Navbar