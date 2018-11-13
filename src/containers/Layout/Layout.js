import React, { Component } from 'react';

import NavBar from '../../components/Navigation/NavBar/NavBar'
import styles from './Layout.module.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        }) 
    }
    
    render () {
        return (
            <div className={styles.Layout}>
                <NavBar sideDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Main}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;