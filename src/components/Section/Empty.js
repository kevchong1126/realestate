import React from 'react'
import styles from './Empty.module.scss'

const Empty = (prop, ref) => {
    const { sections } = ref;

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>

    </div>
  )
}

export default React.forwardRef(Empty)