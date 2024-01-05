import React, { useContext } from 'react'
import styles from './Available.module.scss'
import { context } from '../../Context';

const Available = () => {
    const { sections, text6 } = useContext(context);

    const text = ['Discover our', 'Available apartments' ];

    const splitText = arr => {
        
        return (
            arr.map( (sentence, idx) => {

                return (
                    <h1 key={idx}>{
                        sentence.split('').map( (el) => <span key={Math.random()} ref={el => text6.current.push(el)}>
                            {el}
                        </span>)
                    }</h1>
                )
            })
        )
    };

  return (
    <div className={styles.container} ref={el => sections.current.push(el)}>
        <div className={styles.content}>
            <div className={styles.topContainer}>
                <p className={styles.char}>Availability</p>
                
                <div className={styles.headingContainer}>
                    {
                        splitText(text)
                    }
                </div>

                <div className={styles.line}></div>

                <div className={styles.btns}>
                    <div className={styles.btnContainer}>
                        <p>Download brochure</p>
                        <div className={styles.circle}>
                            <p>-></p>
                        </div>
                    </div>

                    <div className={styles.btnContainer}>
                        <p>Make an appointment</p>
                        <div className={styles.circle2}>
                            <p>-></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>

                <div className={styles.row}>
                    <p className={styles.col}>Section</p>
                    <p className={styles.col}>Bedrooms</p>
                    <p className={styles.col}>Floor</p>
                    <p className={styles.col}>Side</p>
                    <p className={styles.col}>Parking</p>
                    <p className={styles.col}>Area (m2)</p>
                    <p className={styles.col}>Availability</p>
                </div>

                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    <p>A</p>
                    <p>2 Bedrooms</p>
                    <p>1</p>
                    <p>West</p>
                    <p>Yes</p>
                    <p>158</p>
                    <p>Yes</p>
                </div>
            
            </div>    
        </div>
    </div>
  )
}

export default Available