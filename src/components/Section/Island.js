import React, { useContext } from 'react'
import styles from './Island.module.scss'
import { context } from '../../Context'

/*Images*/
import vid1 from '../../images/video.mp4'

const Island = () => {
    const { sections, container4, img4, text4 } = useContext(context);

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
        <div className={styles.content}>

            <div className={styles.videoContainer} ref={container4}>
                <video loop muted playsInline autoPlay ref={img4}>
                    <source src={vid1} >
                    </source>
                </video>
            </div>

            <div className={styles.textContainer} ref={text4}>
                <div className={styles.top}>
                    <p>The Island</p>
                </div>
                <div className={styles.middle}>
                    <p className={styles.header}>EXPERIENCE THE</p>
                    <p className={styles.header}>BEST OF PLACES</p>
                    <p className={styles.header}>LIVING ON IBIZA</p>
                </div>
                <div className={styles.bottom}>
                    <p>LIVING ON WONDERLAND OFFERS A CHANCE TO EXPERIENCE THE ISLAND'S LUSH GREEN LANDSCAPES, PICTURESQUE</p>
                    <p>BEACHES, AND WARM CLIMATE ALL YEAR ROUND. THE ISLAND IS HOME TO A DIVERSE ARRAY OF OUTDOOR</p>
                    <p>ACTIVITIES, FROM HIKING TO PARAGLIDING, AND THE LOCAL CULTURE IS RICH WITH HISTORY AND TRADITION.</p>
                    <p>IN ADDITION, IBIZA HAS A GROWING ECONOMY, MAKING IT AN EXCELLENT PLACE TO LIVE AND WORK.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Island