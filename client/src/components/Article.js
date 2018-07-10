import React from 'react';
import Jumbotron from './Jumbotron';
import Search from './Search';
import Results from './Results';
import SavedArticles from './SavedArticles';
import api from '../utils/api'

class Article extends Component{
    state = {
        topic: '',
        startYear: '',
        endYear: '',
        articles: [],
        saved: []
    };

    // Page reload, components mount 
    componentDidMount(){
        this.renderSavedArticles();
    }

    renderSavedArticles = () =>{
        api.getArticles().then((res) =>{
            this.setState({ saved: res.data})
        })
    }






} 