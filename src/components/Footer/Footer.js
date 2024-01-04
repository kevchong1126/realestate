import React from 'react'
import styles from './Footer.module.scss'

/*Images*/
import img1 from '../../images/footer.webp'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img src={img1} alt='house'></img>
            <div className={styles.overlay}></div>
        </div>

        <div className={styles.content}>

            <div className={styles.heading}>
                <h2>Inquire today</h2>
            </div>

            <div className={styles.btnContainer}>
                <div className={styles.circle}>
                    <p>Schedule</p>
                </div>
            </div>

            <div className={styles.help}>
                <p>NEED A QUICK RESPONSE? OUR SALES CONSULTANTS ARE READY</p>
                <p>TO HELP, WHEN YOU NEED IT.</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.links}>
                
                <div className={styles.col}>
                    <p>Visit us</p>
                    <p>Ibiza 19th street</p>
                    <p>Shopping 09900</p>
                </div>
                <div className={styles.col}>
                    <p>Contact us</p>
                    <p>+1-351-6325</p>
                    <p>+1-521-6325</p>
                </div>
                <div className={styles.col}>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Shipping Policiy</p>
                </div>
                <div className={styles.col}>
                    <p>Developed by:</p>
                    <p>Kevin Chong</p>
                    <p>with react</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer