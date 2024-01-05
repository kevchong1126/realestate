import React, { useContext } from 'react'
import styles from './Empty.module.scss'
import { context } from '../../Context';

const Empty = ( ) => {
    const { sections } = useContext(context);

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>

    </div>
  )
}

export default Empty