import React from 'react';

import NavItem from './NavItem/NavItem'
import styles from './NavItems.module.css'

const navItems = (props) => (
    <ul className={styles.NavItems}>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/">Account</NavItem>
    </ul>
)

export default navItems;