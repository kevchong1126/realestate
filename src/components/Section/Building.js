import React, { forwardRef } from 'react'
import styles from './Building.module.scss'

/*Images*/
import img1 from '../../images/bg1.webp'

const Building = (props, refParent) => {
    const { sections, img5 } = refParent;

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
        <div className={styles.imgContainer}>
            <img src={img1} alt='building' ref={img5}></img>
        </div>
    </div>
  )
}

export default forwardRef(Building)