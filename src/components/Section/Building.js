import React, { useContext } from 'react'
import styles from './Building.module.scss'
import { context } from '../../Context'

/*Images*/
import img1 from '../../images/bg1.webp'

const Building = () => {
    const { sections, img5 } = useContext(context);

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
        <div className={styles.imgContainer}>
            <img src={img1} alt='building' ref={img5}></img>
        </div>
    </div>
  )
}

export default Building