import React from 'react';
import Logo from '../../Logo/Logo';

import NavItems from './NavItems/NavItems';
import styles from './NavBar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const navBar = (props) => (
    <header className={styles.NavBar}>
        <DrawerToggle clicked={props.sideDrawerToggle}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.Desktop}>
            <NavItems />
        </nav>
    </header>
)

export default navBar;