import React, { useRef, forwardRef } from 'react'
import styles from './Vision.module.scss'

/*images*/
import img1 from '../../images/small1.webp'

const Vision = (props, refParent) => {
    const { sections, img2: imgRef, overlay2, text2 } = refParent;
    
    const text = ['OUR VISION FOR LUXURY', 'LIVING ON WONDERLAND IS TO', 'CREATE A ONE-OF-A-KIND', 'DEVELOPMENT THAT',
                    'COMBINES COMFORTABILITY', 'WITH LUXURY'
                ];

    const splitText = arr => {
        return (
            arr.map( (sentence, idx) => {

                return (
                    <p key={idx}>{
                        sentence.split('').map( (el, idx2) => <span key={Math.random()} ref={el => text2.current.push(el)}>
                            {el}
                        </span>)
                    }</p>
                )
            })
        )
    };

  return (
    <div className={styles.container} ref={el => {sections.current.push(el)}}>
        <div className={styles.content}>
            <p className={styles.header}>ELEVATE YOUR LIFESTYLE</p>
            <div className={styles.paragraph}>
                {
                    splitText(text)
                }
            </div>
            <div className={styles.imgContainer}>
                <img src={img1} alt='beach' ref={imgRef}></img>
                <div className={styles.overlay} ref={overlay2}></div>
            </div>
            <div className={styles.caption}>
                <p>FEATURING STRAIGHT LINES AND MODERN</p>
                <p>AMENITIES, OUR DEVELOPMENT WILL OFFER</p>
                <p>RESIDENTS THE ULTIMATE IN STYLE AND</p>
                <p>COMFORT FOR A GOOD PRICE.</p>
            </div>
        </div>
    </div>
  )
}

export default forwardRef(Vision)