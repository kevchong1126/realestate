import React, { useContext } from 'react'
import styles from './Apartments.module.scss'
import { context } from '../../Context'

/*images*/
import img1 from '../../images/gallery1.webp'
import img2 from '../../images/gallery2.webp'
import img3 from '../../images/gallery3.webp'
import img4 from '../../images/gallery4.webp'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Apartments = (props) => {
  const { sections, text3, img3: imgRef } = useContext(context);

  const navigate = () => {
    gsap.to(window, {duration: 1.5, scrollTo: sections.current[7].offsetLeft})
  };

  const text = ['An oasis', 'of nature'];

    const splitText = arr => {
        
        return (
            arr.map( (sentence, idx) => {

                return (
                    <p key={idx}>{
                        sentence.split('').map( (el) => <span key={Math.random()} ref={el => text3.current.push(el)}>
                            {el}
                        </span>)
                    }</p>
                )
            })
        )
    };
  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
      <div className={styles.line}></div>

      <div className={styles.content}>

        <div className={styles.info}>
          <div className={styles.top}>
            <div className={styles.col}>
              <p>Location</p>
              <p>Typologies</p>
              <p>Release date</p>
              <p>No. apartments</p>
            </div>
            <div className={styles.col}>
              <p>Ibiza</p>
              <p>T1;T2;T3 duplex</p>
              <p>2023</p>
              <p>24</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.char}>Apartments</p>
            <div className={styles.heading}>
              {
                splitText(text)
              }
            </div>
            <div className={styles.linkContainer} onClick={() => navigate()}>
              <p>Available apartments</p>
              <div className={styles.circle}>
                <p>-></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.image1}>
          <img src={img1} alt='house' ref={el => imgRef.current.push(el)}></img>
        </div>

        <div className={styles.img2}>
          <div className={styles.row}>
            <img src={img2} alt='kitchen' ref={el => imgRef.current.push(el)}></img>
          </div>
            
          <div className={styles.row}>
            <img src={img3} alt='living room'  ref={el => imgRef.current.push(el)}></img>
          </div>
        </div>

        <div className={styles.img3}>
          <img src={img4} alt='house'  ref={el => imgRef.current.push(el)}></img>
        </div>
      </div>
    </div>
  )
}

export default Apartments