import React from 'react'
import styles from './Location.module.scss'

const Location = (prop, refParent) => {
    const { sections, text5 } = refParent;

    const text = ['Escape to', "Nature's", 'Paradise'];

    const splitText = arr => {
        
        return (
            arr.map( (sentence, idx) => {

                return (
                    <h2 key={idx}>{
                        sentence.split('').map( (el) => <span key={Math.random()} ref={el => text5.current.push(el)}>
                            {el}
                        </span>)
                    }</h2>
                )
            })
        )
    };

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
        <div className={styles.content}>
            <div className={styles.animation}>
                <p>.In the heart of Ibiza .In the heart of Ibiza .In the heart of Ibiza
                    .In the heart of Ibiza .In the heart of Ibiza .In the heart of Ibiza
                </p>
            </div>

            <div className={styles.locationContainer}>
                <div className={styles.top}>
                    <p className={styles.heading}>Location</p>
                    <div className={styles.bigContainer}>
                        {
                            splitText(text)
                        }
                    </div>
                    <div className={styles.smallContainer}>
                        <p>OUR LUXURIOUS LIVING ON IBIZA ISLAND</p>
                        <p>IS NESTLED IN THE HEART OF NATURE'S</p>
                        <p>PARADISE. THE ISLAND IS KNOWN FOR ITS</p>
                        <p>STUNNING LANDSCAPES AND UNIQUE FLORA</p>
                        <p>AND FAUNA, WITH OUR DEVELOPMENT</p>
                    </div>
                </div>
                <a href="https://maps.app.goo.gl/ZrGMpvGwFfUCGfWD9" className={styles.bottom} target='_blank'>
                    <p >See Location</p>
                    <div className={styles.circle}>
                        <p>-></p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default React.forwardRef(Location)