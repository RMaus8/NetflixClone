import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as keys from '../../Keys'
import * as actions from '../../store/actions/netflix'
// import styles from './NetflixClone.module.css'
import Navigation from '../../components/Netflix/Navigation/Navigation';
import UserProfile from '../../components/Netflix/UserProfile/UserProfile';
import Hero from '../../components/Netflix/Hero/Hero';
import TitleList from '../TitleList/TitleList';
import Logo from '../../components/Netflix/Logo/Logo';
import '../../App.css'

class NetflixClone extends Component {
    state = {
        searchTerm: ""
    }

    handleKeyUp = (event) => {
        if (event.key === 'Enter' && this.props.searchTerm !== ''){
            const searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + keys.api_key;
            this.props.updateSearch(searchUrl);
        }
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }


    render () {
        return (
            <div>
                <header className="Header">
                    <Logo />
                    <Navigation />
                    <div className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm} />
                    </div>
                    <UserProfile />
                </header>
                <Hero />
                <TitleList title="Search Results" url={this.props.searchUrl} />
                <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        searchUrl: state.searchUrl,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovies: () => dispatch(actions.initMovies()),
        updateSearch: (search) => dispatch(actions.updateSearch(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixClone)