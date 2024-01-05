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
    const { sections, img1, text1,
            text2, overlay2, img2,
            img3, text3,
            container4, img4, text4,
            text5,
            img5,
            text6,
            list
            } = useContext(context);

    const track = useRef();
    
    
    const colors = ['#120902', '#fff', '#120902'];

    useEffect(() => {
        const anims = [sections.current[1], sections.current[3], sections.current[5]];

        const ctx = gsap.context( () => {
            let mm = gsap.matchMedia();

            mm.add('(min-width: 801px)', () => {
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
                anims.forEach( (section, index) => {
                    ScrollTrigger.create({
                        trigger: section,
                        start: 'left center',
                        containerAnimation: tl,
                        animation: gsap.to(list.current, {
                            color: colors[index], 
                            duration: 1,
                            immediateRender:false
                        }),
                        toggleActions:"play none none reverse"
                    })
                })
                //Hero
                ScrubTo(tl, img1.current, img1.current,
                    'left left', 'right left', 0.5, {xPercent: 30, ease: 'none'
                });
    
                text1.current.forEach(el => {
                    if (el){
                        AnimTo(tl, el, el, 'left right', {
                            opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                        })
                    }
                    
                })
                
                //Vision
                AnimTo(tl, img2.current, img2.current, 
                    'left right', {clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.7, ease: Power2.easeIn, delay: 0.8
                });
                AnimTo(tl, overlay2.current, overlay2.current, 
                    'left right', {clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.6, ease: Power2.easeIn, delay: 0.4
                });
                text2.current.forEach(el => {
                    if (el) {
                        AnimTo(tl, el, el, 'left right', {
                            opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                        })
                    }
                    
                });
                
    
                //Apartments
               text3.current.forEach(el => {
                    if (el){
                        AnimTo(tl, el, el, 'left right', {
                            opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                        }) 
                    }
                    
                });
                img3.current.forEach(el => {
                    if (el){
                        ScrubTo(tl, el, el, 'left right', 'right left', 0.5, {scale: 1.15, ease: 'none'})
                    }
                });
    
                //Island
                ScrubTo(tl, container4.current, sections.current[3],
                        'left left', `+=${sections.current[3].offsetWidth}`, true, {
                            x: `${sections.current[3].offsetWidth}`, ease: 'none',
                            width: '100%', height: '100%'
                });
                ScrubTo(tl, text4.current, sections.current[3],
                        'left left', `+=${sections.current[3].offsetWidth/2}`, true, {
                            x: `${sections.current[3].offsetWidth/2}`, ease: 'none',
                            opacity: 0
                });
                ScrubTo(tl, img4.current, sections.current[4],
                    'left left', `+=${sections.current[4].offsetWidth}`, true, {
                        xPercent: 30, ease: 'none'
                });    
                
                //Location
                text5.current.forEach(el => {
                    if (el){
                        AnimTo(tl, el, el, 'left right', {
                            opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                        })
                    }
                });
                
                
    
                //Building
                ScrubTo(tl, img5.current, sections.current[6],
                    'left left', `+=${sections.current[6].offsetWidth}`, true, {
                        xPercent: 30, ease: 'none'
                });
                    
                //Available
                text6.current.forEach(el => {
                    if (el){
                        AnimTo(tl, el, el, 'left right', {
                            opacity: 1, delay: random(0, 0.2), duration: random(0, 0.2)
                        })
                    }
                
                });
             });

            })
            

         return () => {
            ctx.revert()
         }
        
    }, []);


  return (
    <div className={styles.track} ref={track}>
        <Hero />
        <Vision />
        <Apartments />
        <Island />
        <Empty />
        <Location />
        <Building />
        <Available />
    </div>
  )
}

export default Track