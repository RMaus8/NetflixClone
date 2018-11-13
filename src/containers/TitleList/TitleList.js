import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/netflix'
// import styles from './TitleList.module.css'
import Item from '../../components/Netflix/TitleListItems/Item';
import '../../App.css'
import * as keys from '../../Keys'
import axios from '../../axios-movies';


class TitleList extends Component {
    state = {
        toggled: false,
        data: [],
        mounted: false
    }

    loadContent = () => {
        let requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + keys.api_key;
        axios.get(requestUrl)
            .then( response => {
                this.setState({data: response.data})
            })
            .catch((err) => {
                console.log(err)
            })        
    }
    componentWillReceiveProps = (nextProps) => {
        // if (nextProps.url !== this.props.url && nextProps.url !== '') {
        //     this.props.loadContent({ mounted: true, url: nextProps.url })
        // }
        if(nextProps.url !== this.props.url && nextProps.url !== ''){
            this.setState({mounted:true,url:nextProps.url},()=>{
              this.loadContent();
            });
            
          }
    }

    componentDidMount = () => {
        // if (this.props.url !== '') {
        //     this.props.loadContent({ mounted: true, url: this.props.url })
        // }
        if(this.props.url !== ''){
            this.loadContent();
            this.setState({mounted:true});
          }
    }

    handleClick = () => {
        this.setState({ toggled: !this.state.toggled })
    }

    render() {
        let titles = '';
        if (this.state.data.results) {
            titles = this.state.data.results.map((title, index) => {
                if (index < 5) {
                    let name = '';
                    const backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
                    if (!title.name) {
                        name = title.original_title;
                    } else {
                        name = title.name
                    }
                    return (
                        <Item key={title.id} title={name} score={title.vote_average} toggle={this.handleClick} toggleStatus={this.state.toggled} overview={title.overview} backdrop={backDrop} />
                    );
                } else {
                    return (<div key={title.id}></div>)
                }
            });
        }
        return (
            <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper">
                        {titles}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        mounted: state.mounted,
        data: state.contentData

    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadContent: (payload) => dispatch(actions.loadContent(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList)