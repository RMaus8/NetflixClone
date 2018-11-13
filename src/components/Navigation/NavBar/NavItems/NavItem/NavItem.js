import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const navItem = (props) => (
    <li className={styles.NavItem}>
        <NavLink to={props.link} exact>{props.children}</NavLink>
    </li>
)

export default navItem;