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

    // Page loads, components mount, method runs
    componentDidMount(){
        this.renderSavedArticles();
    };

    // Method, get saved articles from db 
    renderSavedArticles = () =>{
        api.getArticles().then((res) =>{
            this.setState({ saved: res.data})
        }).catch(err => console.log(err))
    };

    // Method, render a div for each resulting article
    renderArticles = () => {
        return this.state.articles.map(article =>(
            <Results
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date}
                url={article.web_url}
                handleSave = {this.handleSave}
                // Saved articles
            />
        ));
    };

    // Method for rendering saved articles
    renderSaved = () => {
        return this.state.saved.map(save => (
            <Saved 
                _id={save._id}
                key={save.id}
                title={save.title}
                date={save.date}
                url={save.url}
                handleDelete = {this.handleDelete}
                renderSavedArticles = {this.renderSavedArticles}

            />
        ));
    };

    // Keep track of topic change 
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }
    
    // Date change 
    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    }

    // Date change
    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    }

    // On submit 
    handleFormSubmit = (event) => {
        event.preventDefault();
        api.nytSearch(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res)=>{
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            });
    };

    // When save clicked, article saved to db
    handleSave = (id) => {
        // Here search article by id
        const searchArticle = this.state.articles.find((element) => element._id === id);
        const newArticleToSave = {title: searchArticle.headline.main, date: searchArticle.pub_date, url: searchArticle.web_url};
        api.saveArticles(newArticleToSave)
        .then(this.renderSavedArticles)
    };


    // Delete articles from db after delete button clicked
    handleDelete = (id) => {
        api.deleteArticles(id)
        .then(this.renderSavedArticles());
    }; 

    render() {
        return (
            // <div>
            //     {/*  */}
            // </div>
            <Search
                handleTopicChange={this.handleTopicChange}
                handleStartYearChange={this.handleStartYearChange}
                handleEndYearChange={this.handleEndYearChange}
                handleFormSubmit={this.handleFormSubmit}
                renderArticles={this.renderArticles}
            />
            


        )
    }






} 