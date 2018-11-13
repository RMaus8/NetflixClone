import React from 'react';
import styles from './ListToggle.module.css'

const listToggle = (props) => {
    return (
        <div onClick={props.toggle} data-toggled={props.toggleStatus} className={styles.ListToggle}>
            <div>
                <i className="fa fa-fw fa-plus"></i>
                <i className="fa fa-fw fa-check"></i>
            </div>
        </div>
    )
}

export default listToggle;