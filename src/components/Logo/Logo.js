import React from 'react';
import logoImg from 'C:\\Users\\Bobby\\Pictures\\Capture.JPG'
import styles from './Logo.module.css'

const logo = (props) => (
        <div className={styles.Logo}>
            <img src={logoImg} alt="Logo" />
        </div>
)

export default logo;