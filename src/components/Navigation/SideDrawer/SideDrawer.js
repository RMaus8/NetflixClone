import React, {Fragment} from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavItems from '../NavBar/NavItems/NavItems';

import styles from './SideDrawer.module.css'

const sideDrawer = (props) => {
    let classes = [styles.SideDrawer, styles.Closed]
    if (props.open) {
        classes = [styles.SideDrawer, styles.Open]
    }
    
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classes.join(' ')} onClick={props.closed}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Fragment>
    )
} 

export default sideDrawer;