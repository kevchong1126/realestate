import React, { useContext, forwardRef } from 'react'
import styles from './Hero.module.scss'
import { context } from '../../Context'
/*Images*/
import img1 from '../../images/bg.webp'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin);

const Hero = (props, refParent) => {
    const { sections, img1 : imgRef, text1 } = refParent;
    const text = ['Comfort and', 'elegance at', 'ibiza real estate'];
    const {offset2} = useContext(context);
    
    const navigate = () => {
        gsap.to(window, {duration: 1.5, scrollTo: offset2})
    };
    
    const splitText = arr => {
        
        return (
            arr.map( (sentence, idx) => {

                return (
                    <h1 key={idx}>{
                        sentence.split('').map( (el) => <span key={Math.random()} ref={el => text1.current.push(el)}>
                            {el}
                        </span>)
                    }</h1>
                )
            })
        )
    };

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>

        <div className={styles.imgContainer} >
            <img src={img1} alt='luxury building' ref={imgRef}></img>
            <div className={styles.overlay}></div>
        </div>

        <div className={styles.content}>
            <div className={styles.top}>
                <div className={styles.big}>
                    {
                        splitText(text)
                    }
                </div>
                <div className={styles.small}>
                    <p>CAREFULLY THOUGHT OUT AND TAILORED WITH</p>
                    <p>GREAT FLEXIBILITY, ADAPTING ITSELF TO THE</p>
                    <p>NEEDS AND LIFESTYLE OF THE CLIENTS</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.call}>
                        <div className={styles.circle}></div>
                        <p>Call us today</p>
                    </div>
                    <div className={styles.number}>
                        <p>+1-351-156-1</p>
                        <p>Local fees may apply</p>
                        <p>+1-351-156-1</p>
                        <p>Local fees may apply</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.circle} onClick={() => navigate()}>
                        <p>Scroll</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default forwardRef(Hero)