import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export const ScrubTo = (container, target, trigger, start, end, scrub, properties) => {

    gsap.to(target, {
        ...properties,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: scrub,
            containerAnimation: container
        }
    })
}

export const AnimTo = (container, target, trigger, start, properties) => {

    gsap.to(target, {
        ...properties,
        scrollTrigger: {
            trigger: trigger,
            start: start,
            toggleActions: 'play none none reset',
            containerAnimation: container
        }
    })
}