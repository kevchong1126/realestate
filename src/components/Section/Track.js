import React, { useEffect, useRef, useContext } from 'react'
import styles from './Track.module.scss'
import { context } from '../../Context'

/*Components*/
import Hero from './Hero'
import Vision from './Vision'
import Apartments from './Apartments'
import Island from './Island'
import Empty from './Empty'
import Location from './Location'
import Building from './Building'
import Available from './Available'

import { ScrubTo, AnimTo } from '../../gsap/containerAnim'

import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const random = (min, max) => {
    return (Math.random() * (max-min+1) + min)
}

const Track = () => {
    const { offset2, setOffset2, offset3, setOffset3, offset4, setOffset4 } = useContext(context);

    const track = useRef();
    const global = {
        sections: useRef([]), img1: useRef(), text1: useRef([]),
        img2: useRef(), overlay2: useRef(), text2: useRef([]),
        text3: useRef([]), img3: useRef([]),
        container4: useRef(), img4 : useRef(), text4 : useRef(),
        text5: useRef([]),
        img5: useRef(),
        text6: useRef([]),
    }

    useEffect(() => {
        setOffset2(global.sections.current[1].offsetLeft);
        setOffset3(global.sections.current[5].offsetLeft);
        setOffset4(global.sections.current[7].offsetLeft);
        const ctx = gsap.context( () => {
            const tl = gsap.to(track.current, {
                x: `-${track.current.clientWidth - window.innerWidth}`,
                ease: 'none',
                scrollTrigger: {
                    trigger: track.current,
                    scrub: 1,
                    pin: true,
                    end: `+=${track.current.clientWidth - window.innerWidth}`
                }
            })

            /*Hero*/
            ScrubTo(tl, global.img1.current, global.img1.current,
                'left left', 'right left', 0.5, {xPercent: 30, ease: 'none'});

            global.text1.current.forEach(el => {
                if (el){
                    AnimTo(tl, el, el, 'left right', 'play none none reset', {
                        opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                    })
                }
                
            })
            
                /*Vision*/
            AnimTo(tl, global.img2.current, global.img2.current, 
                'left right', 'play none none reset', {clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.7, ease: Power2.easeIn, delay: 0.8});
            AnimTo(tl, global.overlay2.current, global.overlay2.current, 
                'left right', 'play none none reset', {clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.6, ease: Power2.easeIn, delay: 0.4});
            global.text2.current.forEach(el => {
                if (el) {
                    AnimTo(tl, el, el, 'left right', 'play none none reset', {
                        opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                    })
                }
                
            });

            /*Apartments*/
            global.text3.current.forEach(el => {
                if (el){
                    AnimTo(tl, el, el, 'left right', 'play none none reset', {
                        opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                    }) 
                }
                
            });
            global.img3.current.forEach(el => {
                if (el){
                    ScrubTo(tl, el, el, 'left right', 'right left', 0.5, {scale: 1.15, ease: 'none'})
                }
            });

            /*Island*/
            ScrubTo(tl, global.container4.current, global.sections.current[3],
                    'left left', `+=${global.sections.current[3].offsetWidth}`, true, {
                        x: `${global.sections.current[3].offsetWidth}`, ease: 'none',
                        width: '100%', height: '100%'
                    });
            ScrubTo(tl, global.text4.current, global.sections.current[3],
                    'left left', `+=${global.sections.current[3].offsetWidth/2}`, true, {
                        x: `${global.sections.current[3].offsetWidth/2}`, ease: 'none',
                        opacity: 0
                    });
            ScrubTo(tl, global.img4.current, global.sections.current[4],
                'left left', `+=${global.sections.current[4].offsetWidth}`, true, {
                    xPercent: 30, ease: 'none'
                });     
            
            /*Location*/
            global.text5.current.forEach(el => {
                if (el){
                    AnimTo(tl, el, el, 'left right', 'play none none reset', {
                        opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                    })
                }
            });

            /*Building*/
            ScrubTo(tl, global.img5.current, global.sections.current[6],
                'left left', `+=${global.sections.current[6].offsetWidth}`, true, {
                    xPercent: 30, ease: 'none'
                });
                
            /*Available*/
            global.text6.current.forEach(el => {
                if (el){
                    AnimTo(tl, el, el, 'left right', 'play none none reset', {
                        opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                    })
                }
                
            });
         });

         return () => {
            ctx.revert()
         }
        
    }, [global.text1.current,
        global.text2.current,
        global.text3.current,
        global.text4.current,
        global.text5.current,
        global.text6.current]);


  return (
    <div className={styles.track} ref={track}>
        <Hero ref={global} />
        <Vision ref={global} />
        <Apartments ref={global} />
        <Island ref={global} />
        <Empty ref={global} />
        <Location ref={global} />
        <Building ref={global} />
        <Available ref={global} />
    </div>
  )
}

export default Track